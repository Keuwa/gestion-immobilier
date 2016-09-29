var mongoose = require('mongoose');
var bienModel = require('./model.js');
var _ = require('lodash');

exports.get = function get(req,res){
  var research = null;
  if(req.query) {
    research = req.query;
    delete research.api_key;
  }
  bienModel.find(research)
    .populate({
        path: 'commune',
        populate: { path: 'commune'}})
    .exec(function(err, biens) {
      if (err) {
        res.status(400).send({ error: 'BAD_REQUEST', code: 400});
      }
      else {
        res.json(biens);
      }
    })
  ;
};

exports.post = function post(req,res) {
  var bien = new bienModel();
  _.extend(bien,req.body);
  bien.save(function (err) {
    if(err){
      res.send(err)
      res.status(400).send({error:'BAD_REQUEST',code: 400});
    }
    else{
      res.json(bien)
    }

  })
};

exports.update = function(req,res){
  bienModel.findOneAndUpdate({_id:req.params.id},req.body,function (err,bien) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!bien){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else {
      res.json(bien);
    }
  });
}

exports.delete = function (req,res) {
  bienModel.findOneAndRemove({_id:req.params.id},function (err,bien) {
    if(err){
      res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
    }
    else if(!bien){
      res.status(404).json({ error: 'NOT_FOUND', code: 404});
    }
    else{
      res.status(200).json({ error: 'OK', code: 200});
    }
  })
}

exports.getOne = function (req,res) {
  bienModel.findOne({_id:req.params.id})
    .populate({
        path: 'commune',
        populate: { path: 'commune'}})
    .exec(function (err,bien) {
      if(err){
        res.status(400).send({ error: 'BAD_REQUEST', code: 400, log: err});
      }
      else if(!bien){
        res.status(404).json({ error: 'NOT_FOUND', code: 404});
      }
      else{
        res.json(bien);
      }
  });
}
