var mongoose = require('mongoose');
var communeModel = require('./model.js');
var LotModel = require('../lot/model.js');
var UniteEvaluationModel = require('../uniteEvaluation/model.js');
var _ = require('lodash');

exports.get = function get(req,res){
  var research = null;
  if(req.query) {
    research = req.query;
    delete research.api_key;
  }
  communeModel.find(research)
    /*.populate({
      path: 'recipe',
      populate: { path: 'owner' }})*/
    .exec(function(err, communes) {
      if (err) {
        res.status(400).send({ error: 'BAD_REQUEST', code: 400});
      }
      else {
        res.json(communes);
      }
    })
  ;
};

exports.post = function post(req,res) {
  var commune = new communeModel();
  _.extend(commune,req.body);
  commune.save(function (err) {
    if(err){
      res.send(err)
      res.status(400).send({error:'BAD_REQUEST',code: 400});
    }
    else{
      res.json(commune)
    }

  })
};

exports.update = function(req,res){
  communeModel.findOneAndUpdate({_id:req.params.id},req.body,function (err,commune) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!commune){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else {
      res.json(commune);
    }
  });
}


exports.delete = function (req,res) {
  communeModel.findOneAndRemove({_id:req.params.id},function (err,commune) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!commune){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else{
      res.status(200).json({ error: 'OK', code: 200});
    }
  })
}

exports.getOne = function (req,res) {
  communeModel.findOne({_id:req.params.id},req.body,function (err,commune) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!commune){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else{
      res.json(commune);
    }
  });
}
