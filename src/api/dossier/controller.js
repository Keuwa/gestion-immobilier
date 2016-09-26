var mongoose = require('mongoose');
var dossierModel = require('./model.js');
var LotModel = require('../lot/model.js');
var UniteEvaluationModel = require('../uniteEvaluation/model.js');
var _ = require('lodash');

exports.get = function get(req,res){
  var research = null;
  if(req.query) {
    research = req.query;
    delete research.api_key;
  }
  dossierModel.find(research)
    /*.populate({
      path: 'recipe',
      populate: { path: 'owner' }})*/
    .exec(function(err, dossiers) {
      if (err) {
        res.status(400).send({ error: 'BAD_REQUEST', code: 400});
      }
      else {
        res.json(dossiers);
      }
    })
  ;
};

exports.post = function post(req,res) {
  var dossier = new dossierModel();
  _.extend(dossier,req.body);
  dossier.save(function (err) {
    if(err){
      res.send(err)
      res.status(400).send({error:'BAD_REQUEST',code: 400});
    }
    else{
      res.json(dossier)
    }

  })
};

exports.update = function(req,res){
  dossierModel.findOneAndUpdate({_id:req.params.id},req.body,function (err,dossier) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!dossier){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else {
      res.json(dossier);
    }
  });
}


exports.delete = function (req,res) {
  dossierModel.findOneAndRemove({_id:req.params.id},function (err,dossier) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!dossier){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else{
      res.status(200).json({ error: 'OK', code: 200});
    }
  })
}

exports.getOne = function (req,res) {
  dossierModel.findOne({_id:req.params.id},req.body,function (err,dossier) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!dossier){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else{
      res.json(dossier);
    }
  });
}
