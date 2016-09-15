var mongoose = require('mongoose');
var lotModel = require('./model.js');
var _ = require('lodash');

exports.get = function(req,res){
  res.send("lot");
}
