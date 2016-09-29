// Init variable
var mongoose = require('mongoose');

// Define users schema
var historique75Schema = new mongoose.Schema({
  year: {
    type: Date
  },
  evaluation:{
    type:String
  },
  affectation:{
    type:String
  },
  nature: {
    type: String
  },
  VLULocalType: {
    type: Number
  },
  surfacePonderee: {
    type: Number
  },
  ajustement: {
    type: Number
  },
  VL75: {
    type: Number
  },
  commune:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"commune"
  },
  localType:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"localType"
  }
})

// Export the Mongoose model
module.exports = mongoose.model('historique75', historique75Schema);
