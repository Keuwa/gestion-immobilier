var mongoose = require('mongoose');
var historique75Model = require('./model.js');
var _ = require('lodash');

exports.get = function get(req,res){
  var research = null;
  if(req.query) {
    research = req.query;
    delete research.api_key;
  }
  historique75Model.find(research)
    .populate({
        path: 'ensemble',
        populate: { path: 'ensemble'}})
    .exec(function(err, historique75s) {
      if (err) {
        res.status(400).send({ error: 'BAD_REQUEST', code: 400});
      }
      else {
        res.json(historique75s);
      }
    })
  ;
};

exports.post = function post(req,res) {
  var historique75 = new historique75Model();
  _.extend(historique75,req.body);
  historique75.save(function (err) {
    if(err){
      res.send(err)
      res.status(400).send({error:'BAD_REQUEST',code: 400});
    }
    else{
      res.json(historique75)
    }

  })
};

exports.update = function(req,res){
  historique75Model.findOneAndUpdate({_id:req.params.id},req.body,function (err,historique75) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!historique75){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else {
      res.json(historique75);
    }
  });
}

exports.delete = function (req,res) {
  historique75Model.findOneAndRemove({_id:req.params.id},function (err,historique75) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!historique75){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else{
      res.status(200).json({ error: 'OK', code: 200});
    }
  })
}

exports.getOne = function (req,res) {
  historique75Model.findOne({_id:req.params.id})
    .populate({
        path: 'ensemble',
        populate: { path: 'ensemble'}})
    .exec(function (err,historique75) {
      if(err){
        res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
      }
      else if(!historique75){
        res.status(404).json({ error: 'NOT_FOUND', code: 404});
      }
      else{
        res.json(historique75);
      }
  });
}
