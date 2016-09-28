// Init variable
var mongoose = require('mongoose');

// Define users schema
var historiqueEnsembleSchema = new mongoose.Schema({
  orderNumber: {
    type: Number,
    required : true
  },
  date:{
    type:Date
  },
  libelle:{
    type:String
  },
  tantieme: {
    type: Number,
    required : true
  },
  ensemble:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"ensemble"
  }
})

// Export the Mongoose model
module.exports = mongoose.model('historiqueEnsemble', historiqueEnsembleSchema);
