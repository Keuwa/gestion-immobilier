var mongoose = require('mongoose');
var HistoriqueBienModel = require('../historiqueBien/model.js');
var LotModel = require('./model.js');
var UniteEvaluationModel = require('../uniteEvaluation/model.js');
var _ = require('lodash');

exports.get = function get(req,res){
  var research = null;
  if(req.query) {
    research = req.query;
    delete research.api_key;
  }
  LotModel.find(research)
  .populate({
      path: 'proprietaire',
      populate: { path: 'proprietaire'}})
  .populate({
      path: 'ensemble',
      populate: { path: 'ensemble'}})
  .populate({
      path: 'historiqueBien',
      populate: { path: 'historiqueBien'}})
  .populate({
      path: 'uniteEvaluation',
      populate: { path: 'uniteEvaluation'}})
    .exec(function(err, lots) {
      if (err) {
        res.status(400).send({ error: 'BAD_REQUEST', code: 400});
      }
      else {
        res.json(lots);
      }
    })
  ;
};

exports.post = function post(req,res) {
  var lot = new LotModel();
  _.extend(lot,req.body);
  lot.save(function (err) {
    if(err){
      res.status(400).send({error:'BAD_REQUEST',code: 400});
    }
    else{
      res.json(lot)
    }

  })
};

exports.update = function(req,res){
  //Pourquoi l'historiqueBien est pas ajouté mais remplacé ?? Dans resLot le tab de l'historiqueBien est null
  LotModel.findOne({_id:req.params.id},function (err,lot) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!lot){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else {
      LotModel.findOne({_id: lot._id})
        .exec(function(err, resLot) {
          if (err) {
            res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
          }
          else if (!resLot) {
            res.status(404).send({ error: 'NOT_FOUND', code: 404});
          }
          else {
            console.log(resLot);
            var update = req.body;
            var historiqueBien = _.concat(update.historiqueBien,resLot.historiqueBien);
            var uniteEvaluation = _.concat(update.uniteEvaluation,resLot.uniteEvaluation);
            resLot = _.extend(resLot,update);
            resLot.historiqueBien = historiqueBien;
            resLot.uniteEvaluation = uniteEvaluation;
            resLot.save(function (err) {
              if(err) {
                res.status(400).send({ error: 'BAD_REQUEST', code: 400});
              }
              else {
                res.json(resLot);
              }
            });
          }
        });
    }
  });
}

exports.delete = function (req,res) {
  lotModel.findOneAndRemove({_id:req.params.id},function (err,lot) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!lot){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else{
      res.status(200).json({ error: 'OK', code: 200});
    }
  })
}

exports.getOne = function (req,res) {
  lotModel.findOne({_id:req.params.id})
    .populate({
        path: 'proprietaire',
        populate: { path: 'proprietaire'}})
    .populate({
        path: 'ensemble',
        populate: { path: 'ensemble'}})
    .populate({
        path: 'historiqueBien',
        populate: { path: 'historiqueBien'}})
    .populate({
        path: 'uniteEvaluation',
        populate: { path: 'uniteEvaluation'}})
    .exec(function (err,lot) {
      if(err){
        res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
      }
      else if(!lot){
        res.status(404).json({ error: 'NOT_FOUND', code: 404});
      }
      else{
        res.json(lot);
      }
  });
}
