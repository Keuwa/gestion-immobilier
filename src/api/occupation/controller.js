var mongoose = require('mongoose');
var occupationModel = require('./model.js');
var LotModel = require('../lot/model.js');
var UniteEvaluationModel = require('../uniteEvaluation/model.js');
var _ = require('lodash');

exports.get = function get(req,res){
  var research = null;
  if(req.query) {
    research = req.query;
    delete research.api_key;
  }
  occupationModel.find(research)
    /*.populate({
      path: 'recipe',
      populate: { path: 'owner' }})*/
    .exec(function(err, occupations) {
      if (err) {
        res.status(400).send({ error: 'BAD_REQUEST', code: 400});
      }
      else {
        res.json(occupations);
      }
    })
  ;
};

exports.post = function post(req,res) {
  var occupation = new occupationModel();
  _.extend(occupation,req.body);
  occupation.save(function (err) {
    if(err){
      res.send(err)
      res.status(400).send({error:'BAD_REQUEST',code: 400});
    }
    else{
      res.json(occupation)
    }

  })
};

exports.update = function(req,res){
  occupationModel.findOneAndUpdate({_id:req.params.id},req.body,function (err,occupation) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!occupation){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else {
      res.json(occupation);
    }
  });
}


exports.delete = function (req,res) {
  occupationModel.findOneAndRemove({_id:req.params.id},function (err,occupation) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!occupation){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else{
      res.status(200).json({ error: 'OK', code: 200});
    }
  })
}

exports.getOne = function (req,res) {
  occupationModel.findOne({_id:req.params.id},req.body,function (err,occupation) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!occupation){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else{
      res.json(occupation);
    }
  });
}
