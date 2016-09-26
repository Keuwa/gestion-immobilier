// Init variable
var mongoose = require('mongoose');

// Define users schema
var dossierSchema = new mongoose.Schema({
  code: {
    type: String,
    required : true
  },
  name: {
    type: String,
    required : true
  }
})

// Export the Mongoose model
module.exports = mongoose.model('dossier', dossierSchema);
