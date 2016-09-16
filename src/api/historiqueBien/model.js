// Init variable
var mongoose = require('mongoose');

// Define users schema
var historiqueBienSchema = new mongoose.Schema({
  name: {
    type: String,
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
