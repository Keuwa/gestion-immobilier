var mongoose = require('mongoose');
var HistoriqueBienModel = require('../historiqueBien/model.js');
var LotModel = require('../lot/model.js');
var UniteEvaluationModel = require('./model.js');
var _ = require('lodash');

exports.get = function get (req,res){
  var research = null;
  if(req.query) {
    research = req.query;
    delete research.api_key;
  }
  UniteEvaluationModel.find(research)
    /*.populate({
      path: 'recipe',
      populate: { path: 'owner' }})
    .populate('owner')*/
    .exec(function(err, uniteEvaluation) {
      if (err) {
        res.status(400).send({ error: 'BAD_REQUEST', code: 400});
      }
      else {
        res.json(uniteEvaluation);
      }
    })
  ;
};

exports.post = function post(req,res) {
  var uniteEvaluation = new UniteEvaluationModel();
  _.extend(uniteEvaluation,req.body);
  uniteEvaluation.save(function (err) {
    if(err){
      res.status(400).send({error:'BAD_REQUEST',code: 400});
    }
    else{
      res.json(uniteEvaluation)
    }

  })
};

exports.delete = function (req,res) {
  uniteEvaluationModel.findOneAndRemove({_id:req.params.id},function (err,uniteEvaluation) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!uniteEvaluation){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else{
      res.status(200).json({ error: 'OK', code: 200});
    }
  })
}

exports.getOne = function (req,res) {
  uniteEvaluationModel.findOne({_id:req.params.id})
    .populate({
        path: 'historiqueBien',
        populate: { path: 'historiqueBien'}})
    .populate({
        path: 'lot',
        populate: { path: 'lot'}})
    .exec(function (err,uniteEvaluation) {
      if(err){
        res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
      }
      else if(!uniteEvaluation){
        res.status(404).json({ error: 'NOT_FOUND', code: 404});
      }
      else{
        res.json(uniteEvaluation);
      }
  });
}


exports.update = function(req,res){
  //Pourquoi l'historiqueBien est pas ajouté mais remplacé ?? Dans resLot le tab de l'historiqueBien est null
  uniteEvaluationModel.findOne({_id:req.params.id},function (err,lot) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!lot){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else {
      uniteEvaluationModel.findOne({_id: lot._id})
        .exec(function(err, resuniteEvaluation) {
          if (err) {
            res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
          }
          else if (!resuniteEvaluation) {
            res.status(404).send({ error: 'NOT_FOUND', code: 404});
          }
          else {
            console.log(resuniteEvaluation);
            var update = req.body;
            var historiqueBien = _.concat(update.historiqueBien,resuniteEvaluation.historiqueBien);
            var uniteEvaluation = _.concat(update.uniteEvaluation,resuniteEvaluation.uniteEvaluation);
            resuniteEvaluation = _.extend(resuniteEvaluation,update);
            resuniteEvaluation.historiqueBien = historiqueBien;
            resuniteEvaluation.uniteEvaluation = uniteEvaluation;
            resuniteEvaluation.save(function (err) {
              if(err) {
                res.status(400).send({ error: 'BAD_REQUEST', code: 400});
              }
              else {
                res.json(resuniteEvaluation);
              }
            });
          }
        });
    }
  });
}
