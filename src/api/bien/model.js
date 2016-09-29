// Init variable
var mongoose = require('mongoose');

// Define users schema
var bienSchema = new mongoose.Schema({
  code: {
    type: String,
    required : true
  },
  designation:{
    type:String
  },
  adresse:{
    type:String
  },
  commune:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"commune"
  }
})

// Export the Mongoose model
module.exports = mongoose.model('bien', bienSchema);
