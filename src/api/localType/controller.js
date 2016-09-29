var mongoose = require('mongoose');
var localTypeModel = require('./model.js');
var _ = require('lodash');

exports.get = function get(req,res){
  var research = null;
  if(req.query) {
    research = req.query;
    delete research.api_key;
  }
  localTypeModel.find(research)
    .populate({
        path: 'ensemble',
        populate: { path: 'ensemble'}})
    .exec(function(err, localTypes) {
      if (err) {
        res.status(400).send({ error: 'BAD_REQUEST', code: 400});
      }
      else {
        res.json(localTypes);
      }
    })
  ;
};

exports.post = function post(req,res) {
  var localType = new localTypeModel();
  _.extend(localType,req.body);
  localType.save(function (err) {
    if(err){
      res.send(err)
      res.status(400).send({error:'BAD_REQUEST',code: 400});
    }
    else{
      res.json(localType)
    }

  })
};

exports.update = function(req,res){
  localTypeModel.findOneAndUpdate({_id:req.params.id},req.body,function (err,localType) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!localType){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else {
      res.json(localType);
    }
  });
}

exports.delete = function (req,res) {
  localTypeModel.findOneAndRemove({_id:req.params.id},function (err,localType) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!localType){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else{
      res.status(200).json({ error: 'OK', code: 200});
    }
  })
}

exports.getOne = function (req,res) {
  localTypeModel.findOne({_id:req.params.id})
    .populate({
        path: 'ensemble',
        populate: { path: 'ensemble'}})
    .exec(function (err,localType) {
      if(err){
        res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
      }
      else if(!localType){
        res.status(404).json({ error: 'NOT_FOUND', code: 404});
      }
      else{
        res.json(localType);
      }
  });
}
