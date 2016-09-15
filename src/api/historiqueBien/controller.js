var mongoose = require('mongoose');
var historiqueBienModel = require('./model.js');
var _ = require('lodash');

exports.get = function(req,res){
  res.send("historiqueBien");
}
