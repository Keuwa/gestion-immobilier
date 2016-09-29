// Init variable
var mongoose = require('mongoose');

// Define users schema
var historiqueBienSchema = new mongoose.Schema({
  orderNumber: {
    type: Number,
  },
  date: {
    type: Date,
  },
  annualRent: {
    type: Number,
  },
  bien:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'bien'
  },
  proprietaire:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'proprietaire'
  },
  exploitant:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'exploitant'
  },
  occupation:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'occupation'
  },
  lot: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'lot'
  }],
  uniteEvaluation: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'uniteEvaluation'
  }]
})

// Export the Mongoose model
module.exports = mongoose.model('historiqueBien', historiqueBienSchema);
