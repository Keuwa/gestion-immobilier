// Init variable
var mongoose = require('mongoose');

// Define users schema
var ensembleSchema = new mongoose.Schema({
  code: {
    type: String,
    required : true
  },
  designation:{
    type:String
  },
  typeEnsemble:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"typeEnsemble"
  },
  commune:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"commune"
  }
})

// Export the Mongoose model
module.exports = mongoose.model('ensemble', ensembleSchema);
