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
