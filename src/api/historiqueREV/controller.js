var mongoose = require('mongoose');
var historiqueREVModel = require('./model.js');
var DossierModel = require('../dossier/model.js');
var _ = require('lodash');

exports.get = function get(req,res){
  var research = null;
  if(req.query) {
    research = req.query;
    delete research.api_key;
  }
  historiqueREVModel.find(research)
    .populate({
      path: 'occupationFiscale',
      populate: { path: 'occupationFiscale' }})
    .populate({
      path: 'categorieLocal',
      populate: { path: 'categorieLocal' }})
    .populate({
      path: 'uniteEvaluation',
      populate: { path: 'commune' }})
    .exec(function(err, historiqueREVs) {
      if (err) {
        res.status(400).send({ error: 'BAD_REQUEST', code: 400});
      }
      else {
        res.json(historiqueREVs);
      }
    })
  ;
};

exports.post = function post(req,res) {
  var historiqueREV = new historiqueREVModel();
  _.extend(historiqueREV,req.body);
  historiqueREV.save(function (err) {
    if(err){
      res.send(err)
      res.status(400).send({error:'BAD_REQUEST',code: 400});
    }
    else{
      res.json(historiqueREV)
    }

  })
};

exports.update = function(req,res){
  historiqueREVModel.findOneAndUpdate({_id:req.params.id},req.body,function (err,historiqueREV) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!historiqueREV){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else {
      res.json(historiqueREV);
    }
  });
}

exports.delete = function (req,res) {
  historiqueREVModel.findOneAndRemove({_id:req.params.id},function (err,historiqueREV) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!historiqueREV){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else{
      res.status(200).json({ error: 'OK', code: 200});
    }
  })
}

exports.getOne = function (req,res) {
  historiqueREVModel.findOne({_id:req.params.id})
    .populate({
      path: 'dossier',
      populate: { path: 'dossier' }})
    .exec(function (err,historiqueREV) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!historiqueREV){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else{
      res.json(historiqueREV);
    }
  });
}
