// Init variable
var mongoose = require('mongoose');

// Define users schema
var uniteEvaluationSchema = new mongoose.Schema({
  invariant: {
    type: String
  },
  cle: {
    type: String
  },
  section: {
    type: String
  },
  plan: {
    type: String
  },
  adresse: {
    type: String
  },
  batiment: {
    type: String
  },
  entre: {
    type: Number
  },
  niveau: {
    type: Number
  },
  porte: {
    type: Number
  },
  commune: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'commune',
  },
  historiqueBien: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'historiqueBien',
  }],
  lot: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'lot',
  }]
})
// Export the Mongoose model
module.exports = mongoose.model('uniteEvaluation', uniteEvaluationSchema);
