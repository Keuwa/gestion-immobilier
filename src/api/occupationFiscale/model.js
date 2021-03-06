// Init variable
var mongoose = require('mongoose');

// Define users schema
var occupationFiscaleSchema = new mongoose.Schema({
  code: {
    type: String,
    required : true
  },
  designation: {
    type: String,
    required : true
  }
})

// Export the Mongoose model
module.exports = mongoose.model('occupationFiscale', occupationFiscaleSchema);
