var mongoose = require('mongoose');
var surfaceCBDModel = require('./model.js');
var LotModel = require('../lot/model.js');
var UniteEvaluationModel = require('../uniteEvaluation/model.js');
var _ = require('lodash');

exports.get = function get(req,res){
  var research = null;
  if(req.query) {
    research = req.query;
    delete research.api_key;
  }
  surfaceCBDModel.find(research)
    /*.populate({
      path: 'recipe',
      populate: { path: 'owner' }})*/
    .exec(function(err, surfaceCBDs) {
      if (err) {
        res.status(400).send({ error: 'BAD_REQUEST', code: 400});
      }
      else {
        res.json(surfaceCBDs);
      }
    })
  ;
};

exports.post = function post(req,res) {
  var surfaceCBD = new surfaceCBDModel();
  _.extend(surfaceCBD,req.body);
  surfaceCBD.save(function (err) {
    if(err){
      res.send(err)
      res.status(400).send({error:'BAD_REQUEST',code: 400});
    }
    else{
      res.json(surfaceCBD)
    }

  })
};

exports.update = function(req,res){
  surfaceCBDModel.findOneAndUpdate({_id:req.params.id},req.body,function (err,surfaceCBD) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!surfaceCBD){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else {
      res.json(surfaceCBD);
    }
  });
}


exports.delete = function (req,res) {
  surfaceCBDModel.findOneAndRemove({_id:req.params.id},function (err,surfaceCBD) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!surfaceCBD){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else{
      res.status(200).json({ error: 'OK', code: 200});
    }
  })
}

exports.getOne = function (req,res) {
  surfaceCBDModel.findOne({_id:req.params.id},req.body,function (err,surfaceCBD) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!surfaceCBD){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else{
      res.json(surfaceCBD);
    }
  });
}
