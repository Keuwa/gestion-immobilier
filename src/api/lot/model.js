// Init variable
var mongoose = require('mongoose');

// Define users schema
var lotSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  historiqueBien: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'historiqueBien',
  }],
  uniteEvaluation: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'uniteEvaluation'
  }]
})

// Export the Mongoose model
module.exports = mongoose.model('lot', lotSchema);
