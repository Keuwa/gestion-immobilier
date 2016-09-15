var mongoose = require('mongoose');
var uniteEvaluationModel = require('./model.js');
var _ = require('lodash');

exports.get = function(req,res){
  res.send("uniteEvaluation");
}
