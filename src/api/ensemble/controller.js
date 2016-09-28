var mongoose = require('mongoose');
var ensembleModel = require('./model.js');
var _ = require('lodash');

exports.get = function get(req,res){
  var research = null;
  if(req.query) {
    research = req.query;
    delete research.api_key;
  }
  ensembleModel.find(research)
    .populate({
        path: 'commune',
        populate: { path: 'commune'}})
    .populate({
        path: 'typeEnsemble',
        populate: { path: 'typeEnsemble'}})
    .exec(function(err, ensembles) {
      if (err) {
        res.status(400).send({ error: 'BAD_REQUEST', code: 400});
      }
      else {
        res.json(ensembles);
      }
    })
  ;
};

exports.post = function post(req,res) {
  var ensemble = new ensembleModel();
  _.extend(ensemble,req.body);
  ensemble.save(function (err) {
    if(err){
      res.send(err)
      res.status(400).send({error:'BAD_REQUEST',code: 400});
    }
    else{
      res.json(ensemble)
    }

  })
};

exports.update = function(req,res){
  ensembleModel.findOneAndUpdate({_id:req.params.id},req.body,function (err,ensemble) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!ensemble){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else {
      res.json(ensemble);
    }
  });
}

exports.delete = function (req,res) {
  ensembleModel.findOneAndRemove({_id:req.params.id},function (err,ensemble) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!ensemble){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else{
      res.status(200).json({ error: 'OK', code: 200});
    }
  })
}

exports.getOne = function (req,res) {
  ensembleModel.findOne({_id:req.params.id})
    .populate({
        path: 'commune',
        populate: { path: 'commune'}})
    .populate({
        path: 'typeEnsemble',
        populate: { path: 'typeEnsemble'}})
    .exec(function (err,ensemble) {
      if(err){
        res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
      }
      else if(!ensemble){
        res.status(404).json({ error: 'NOT_FOUND', code: 404});
      }
      else{
        res.json(ensemble);
      }
  });
}
