var mongoose = require('mongoose');
var etablissementModel = require('./model.js');
var ExploitantModel = require('../exploitant/model.js');
var _ = require('lodash');

exports.get = function get(req,res){
  var research = null;
  if(req.query) {
    research = req.query;
    delete research.api_key;
  }
  etablissementModel.find(research)
    .populate({
      path: 'exploitant',
      populate: { path: 'exploitant' }})
    .exec(function(err, etablissements) {
      if (err) {
        res.status(400).send({ error: 'BAD_REQUEST', code: 400});
      }
      else {
        res.json(etablissements);
      }
    })
  ;
};

exports.post = function post(req,res) {
  var etablissement = new etablissementModel();
  _.extend(etablissement,req.body);
  etablissement.save(function (err) {
    if(err){
      res.send(err)
      res.status(400).send({error:'BAD_REQUEST',code: 400});
    }
    else{
      res.json(etablissement)
    }

  })
};

exports.update = function(req,res){
  etablissementModel.findOneAndUpdate({_id:req.params.id},req.body,function (err,etablissement) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!etablissement){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else {
      res.json(etablissement);
    }
  });
}

exports.delete = function (req,res) {
  etablissementModel.findOneAndRemove({_id:req.params.id},function (err,etablissement) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!etablissement){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else{
      res.status(200).json({ error: 'OK', code: 200});
    }
  })
}

exports.getOne = function (req,res) {
  etablissementModel.findOne({_id:req.params.id})
    .populate({
      path: 'exploitant',
      populate: { path: 'exploitant' }})
    .exec(function (err,etablissement) {
      if(err){
        res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
      }
      else if(!etablissement){
        res.status(404).json({ error: 'NOT_FOUND', code: 404});
      }
      else{
        res.json(etablissement);
      }
  });
}
