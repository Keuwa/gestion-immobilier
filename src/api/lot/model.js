// Init variable
var mongoose = require('mongoose');

// Define users schema
var lotSchema = new mongoose.Schema({
  lotNumber: {
    type: String
  },
  batiment: {
    type: String
  },
  designation: {
    type: String
  },
  tantieme: {
    type: Number
  },
  multiCFE: {
    type: Boolean
  },
  proprietaire: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'proprietaire'
  },
  historiqueEnsemble: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'historiqueEnsemble'
  },
  historiqueBien: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'historiqueBien'
  }],
  uniteEvaluation: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'uniteEvaluation'
  }]
})

// Export the Mongoose model
module.exports = mongoose.model('lot', lotSchema);
