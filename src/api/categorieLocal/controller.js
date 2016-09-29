var mongoose = require('mongoose');
var categorieLocalModel = require('./model.js');
var LotModel = require('../lot/model.js');
var UniteEvaluationModel = require('../uniteEvaluation/model.js');
var _ = require('lodash');

exports.get = function get(req,res){
  var research = null;
  if(req.query) {
    research = req.query;
    delete research.api_key;
  }
  categorieLocalModel.find(research)
    /*.populate({
      path: 'recipe',
      populate: { path: 'owner' }})*/
    .exec(function(err, categorieLocals) {
      if (err) {
        res.status(400).send({ error: 'BAD_REQUEST', code: 400});
      }
      else {
        res.json(categorieLocals);
      }
    })
  ;
};

exports.post = function post(req,res) {
  var categorieLocal = new categorieLocalModel();
  _.extend(categorieLocal,req.body);
  categorieLocal.save(function (err) {
    if(err){
      res.send(err)
      res.status(400).send({error:'BAD_REQUEST',code: 400});
    }
    else{
      res.json(categorieLocal)
    }

  })
};

exports.update = function(req,res){
  categorieLocalModel.findOneAndUpdate({_id:req.params.id},req.body,function (err,categorieLocal) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!categorieLocal){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else {
      res.json(categorieLocal);
    }
  });
}


exports.delete = function (req,res) {
  categorieLocalModel.findOneAndRemove({_id:req.params.id},function (err,categorieLocal) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!categorieLocal){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else{
      res.status(200).json({ error: 'OK', code: 200});
    }
  })
}

exports.getOne = function (req,res) {
  categorieLocalModel.findOne({_id:req.params.id},req.body,function (err,categorieLocal) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!categorieLocal){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else{
      res.json(categorieLocal);
    }
  });
}
