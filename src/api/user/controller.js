// Init variable
var UserModel = require('./model');
var bcrypt = require('bcrypt-nodejs');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var settings = require('../settings');

 exports.get = function get(req, res) {
  var research = null;
  if (req.query) {
    research = req.query;
    delete research.api_key;
  }
  UserModel.findUsers(research, false, function(err, users) {
    if (err) {
      res.status(400).send({ error: 'BAD_REQUEST', code: 400});
    }
    else {
      res.json(users);
    }
  });
 };

exports.getById = function getById(req, res) {
  var id = req.params.id;
  if(req.params.id === 'me') id = req.user._id;
  UserModel.findUser({_id: id}, false, function(err, users) {
    if (err) {
      res.status(400).send({ error: 'BAD_REQUEST', code: 400});
    }
    else if (!users) {
      res.status(404).send({ error: 'NOT_FOUND', code: 404});
    }
    else {
      res.json(users);
    }
  });
};

exports.post = function post(req,res) {
  var user = new UserModel();
  _.extend(user,req.body);
  user.save(function(err) {
    console.log(err);
    if (err) {
      res.status(400).send({ error: 'BAD_REQUEST', code: 400});
    }
    else {
      res.json(user);
    }
  });
};

exports.update = function update(req, res) {
  var id = req.params.id;
  if(id === "me") id = req.user._id;
  if(!req.user._id.equals(id) && !req.user.admin) {
    return res.status(403).json({ error: 'FORBIDDEN', code: 403});
  }
  UserModel.findOne({ _id: id }, function (err, user){
    if (err) {
      res.status(400).send({ error: 'BAD_REQUEST', code: 400});
    }
    else if (!user) {
      res.status(404).send({ error: 'NOT_FOUND', code: 404});
    }
    else {
      var update = req.body;
      if(_.has(update, '_id')) delete update._id;
      if(_.has(update, 'admin')) delete update.admin;
      if(_.has(update, 'password')) delete update.password;
      user = _.extend(user, update);
      user.save(function (err) {
        if(err) {
          res.status(400).send({ error: 'BAD_REQUEST', code: 400});
        }
        else {
          res.json(user);
        }
      });
    }
  });
};

exports.del = function del(req, res) {
  if(!req.user._id.equals(req.params.id) && !req.user.admin) {
    return res.status(403).json({ error: 'FORBIDDEN', code: 403});
  }
  UserModel.findOneAndRemove({ _id: req.params.id }, function (err, user){
    if (err) {
      res.status(400).send({ error: 'BAD_REQUEST', code: 400});
    }
    else if (!user) {
      res.status(404).send({ error: 'NOT_FOUND', code: 404});
    }
    else {
      // User delete we must delete this recipe
      RecipeModel.find({owner: user._id}, function(err, recipes) {
        if(!err) {
          _.forEach(recipes, function(recipe) {
            Reports.remove({recipe: recipe._id}).exec();
            GradeModel.remove({recipe: recipe._id}).exec();
            RecipeModel.remove({_id: recipe._id}).exec();
          });
        }
      });
      MatchModel.remove({ $or: [{user1: user._id},{user2: user._id}] }).exec();
      GradeModel.remove({owner: user._id}).exec();
      res.json(user);
    }
  });
};

exports.login = function login(req,res) {
  var connexion = req.body;
  var query = {};
  if( (_.isEmpty(_.get(connexion, 'username')) && _.isEmpty(_.get(connexion, 'email'))) || _.isEmpty(_.get(connexion, 'password'))) {
    return res.status(422).send({ error: 'MISSING_PARAMETERS', code: 422});
  }
  if(_.has(connexion, 'username') && !_.isEmpty(connexion.username)) {
    query.username = connexion.username;
  }
  else if(_.has(connexion, 'email') && !_.isEmpty(connexion.email)) {
    query.email = connexion.email;
  }
  UserModel.findUser(query, true, function(err, user) {
    if (err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400});
    }
    else if(!user) {
      res.status(404).send({ error: 'NOT_FOUND', code: 404});
    }
    else {
      var validPwd = bcrypt.compareSync(connexion.password, user.password);
      if(validPwd === true) {
        var token = jwt.sign(
          {
            id: user.id
          },
          settings.jwt.auth.secretKey,
          {
            expiresIn: settings.jwt.auth.expiresIn
          }
        );
        res.send({token:token});
      }
      else {
        res.status(400).send({ error: 'INVALID_PASSWORD', code: 400});
      }
    }
  });
};
