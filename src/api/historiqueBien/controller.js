var mongoose = require('mongoose');
var HistoriqueBienModel = require('./model.js');
var LotModel = require('../lot/model.js');
var UniteEvaluationModel = require('../uniteEvaluation/model.js');
var _ = require('lodash');

exports.get = function get(req,res){
  var research = null;
  if(req.query) {
    research = req.query;
    delete research.api_key;
  }
  HistoriqueBienModel.find(research)
    /*.populate({
      path: 'recipe',
      populate: { path: 'owner' }})*/
    .populate('lot')
    .populate('uniteEvaluation')
    .exec(function(err, historiqueBiens) {
      if (err) {
        res.status(400).send({ error: 'BAD_REQUEST', code: 400});
      }
      else {
        res.json(historiqueBiens);
      }
    })
  ;
};

exports.post = function post(req,res) {
  var historiqueBien = new HistoriqueBienModel();
  _.extend(historiqueBien,req.body);
  historiqueBien.save(function (err) {
    if(err){
      res.send(err)
      res.status(400).send({error:'BAD_REQUEST',code: 400});
    }
    else{
      res.json(historiqueBien)
    }

  })
};

exports.update = function(req,res){
  HistoriqueBienModel.findOne({_id:req.params.id},function (err,historiqueBien) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!historiqueBien){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else {
      HistoriqueBienModel.findOne({_id: historiqueBien._id})
        .populate('lot')
        .populate('uniteEvaluation')
        .exec(function(err, resHistoriqueBien) {
          if (err) {
            res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
          }
          else if (!resHistoriqueBien) {
            console.log("3");
            res.status(404).send({ error: 'NOT_FOUND', code: 404});
          }
          else {
            var update = req.body;
            var lot = _.concat(update.lot,resHistoriqueBien.lot);
            var uniteEvaluation = _.concat(update.uniteEvaluation,resHistoriqueBien.uniteEvaluation);
            resHistoriqueBien = _.extend(resHistoriqueBien,update);
            resHistoriqueBien.lot = lot;
            resHistoriqueBien.uniteEvaluation = uniteEvaluation;
            resHistoriqueBien.save(function (err) {
              if(err) {
                res.status(400).send({ error: 'BAD_REQUEST', code: 400});
              }
              else {
                res.json(resHistoriqueBien);
              }
            });
          }
        });
    }
  });
}
