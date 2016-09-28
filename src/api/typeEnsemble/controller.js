var mongoose = require('mongoose');
var typeEnsembleModel = require('./model.js');
var LotModel = require('../lot/model.js');
var UniteEvaluationModel = require('../uniteEvaluation/model.js');
var _ = require('lodash');

exports.get = function get(req,res){
  var research = null;
  if(req.query) {
    research = req.query;
    delete research.api_key;
  }
  typeEnsembleModel.find(research)
    /*.populate({
      path: 'recipe',
      populate: { path: 'owner' }})*/
    .exec(function(err, typeEnsembles) {
      if (err) {
        res.status(400).send({ error: 'BAD_REQUEST', code: 400});
      }
      else {
        res.json(typeEnsembles);
      }
    })
  ;
};

exports.post = function post(req,res) {
  var typeEnsemble = new typeEnsembleModel();
  _.extend(typeEnsemble,req.body);
  typeEnsemble.save(function (err) {
    if(err){
      res.send(err)
      res.status(400).send({error:'BAD_REQUEST',code: 400});
    }
    else{
      res.json(typeEnsemble)
    }

  })
};

exports.update = function(req,res){
  typeEnsembleModel.findOneAndUpdate({_id:req.params.id},req.body,function (err,typeEnsemble) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!typeEnsemble){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else {
      res.json(typeEnsemble);
    }
  });
}


exports.delete = function (req,res) {
  typeEnsembleModel.findOneAndRemove({_id:req.params.id},function (err,typeEnsemble) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!typeEnsemble){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else{
      res.status(200).json({ error: 'OK', code: 200});
    }
  })
}

exports.getOne = function (req,res) {
  typeEnsembleModel.findOne({_id:req.params.id},req.body,function (err,typeEnsemble) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!typeEnsemble){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else{
      res.json(typeEnsemble);
    }
  });
}
