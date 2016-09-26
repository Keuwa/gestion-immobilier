var mongoose = require('mongoose');
var proprietaireModel = require('./model.js');
var DossierModel = require('../dossier/model.js');
var _ = require('lodash');

exports.get = function get(req,res){
  var research = null;
  if(req.query) {
    research = req.query;
    delete research.api_key;
  }
  proprietaireModel.find(research)
    /*.populate({
      path: 'recipe',
      populate: { path: 'owner' }})*/
    .exec(function(err, proprietaires) {
      if (err) {
        res.status(400).send({ error: 'BAD_REQUEST', code: 400});
      }
      else {
        res.json(proprietaires);
      }
    })
  ;
};

exports.post = function post(req,res) {
  var proprietaire = new proprietaireModel();
  _.extend(proprietaire,req.body);
  proprietaire.save(function (err) {
    if(err){
      res.send(err)
      res.status(400).send({error:'BAD_REQUEST',code: 400});
    }
    else{
      res.json(proprietaire)
    }

  })
};

exports.update = function(req,res){
  proprietaireModel.findOneAndUpdate({_id:req.params.id},req.body,function (err,proprietaire) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!proprietaire){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else {
      res.json(proprietaire);
    }
  });
}


exports.delete = function (req,res) {
  proprietaireModel.findOneAndRemove({_id:req.params.id},function (err,proprietaire) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!proprietaire){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else{
      res.status(200).json({ error: 'OK', code: 200});
    }
  })
}

exports.getOne = function (req,res) {
  proprietaireModel.findOne({_id:req.params.id},function (err,proprietaire) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!proprietaire){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else{
      res.json(proprietaire);
    }
  });
}
