// Init variable
var mongoose = require('mongoose');

// Define users schema
var uniteEvaluationSchema = new mongoose.Schema({
  name: {
    type: String,
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
