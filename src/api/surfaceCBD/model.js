// Init variable
var mongoose = require('mongoose');

// Define users schema
var surfaceCBDSchema = new mongoose.Schema({
  surface: {
    type: Number,
    required : true
  },
  ponderation: {
    type: Number,
    required : true
  },
  designation: {
    type: String,
    required : true
  },
  historique75: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'historique75'
  }
})

// Export the Mongoose model
module.exports = mongoose.model('surfaceCBD', surfaceCBDSchema);
