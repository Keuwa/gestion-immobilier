var mongoose = require('mongoose');
var historiqueEnsembleModel = require('./model.js');
var _ = require('lodash');

exports.get = function get(req,res){
  var research = null;
  if(req.query) {
    research = req.query;
    delete research.api_key;
  }
  historiqueEnsembleModel.find(research)
    .populate({
        path: 'ensemble',
        populate: { path: 'ensemble'}})
    .exec(function(err, historiqueEnsembles) {
      if (err) {
        res.status(400).send({ error: 'BAD_REQUEST', code: 400});
      }
      else {
        res.json(historiqueEnsembles);
      }
    })
  ;
};

exports.post = function post(req,res) {
  var historiqueEnsemble = new historiqueEnsembleModel();
  _.extend(historiqueEnsemble,req.body);
  historiqueEnsemble.save(function (err) {
    if(err){
      res.send(err)
      res.status(400).send({error:'BAD_REQUEST',code: 400});
    }
    else{
      res.json(historiqueEnsemble)
    }

  })
};

exports.update = function(req,res){
  historiqueEnsembleModel.findOneAndUpdate({_id:req.params.id},req.body,function (err,historiqueEnsemble) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!historiqueEnsemble){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else {
      res.json(historiqueEnsemble);
    }
  });
}

exports.delete = function (req,res) {
  historiqueEnsembleModel.findOneAndRemove({_id:req.params.id},function (err,historiqueEnsemble) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!historiqueEnsemble){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else{
      res.status(200).json({ error: 'OK', code: 200});
    }
  })
}

exports.getOne = function (req,res) {
  historiqueEnsembleModel.findOne({_id:req.params.id})
    .populate({
        path: 'ensemble',
        populate: { path: 'ensemble'}})
    .exec(function (err,historiqueEnsemble) {
      if(err){
        res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
      }
      else if(!historiqueEnsemble){
        res.status(404).json({ error: 'NOT_FOUND', code: 404});
      }
      else{
        res.json(historiqueEnsemble);
      }
  });
}
