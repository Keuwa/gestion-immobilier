// Init variable
var mongoose = require('mongoose');

// Define users schema
var historiqueREVSchema = new mongoose.Schema({
  date: {
    type: Date,
    required : true
  },
  surfaceP1:{
    type: String
  },
  surfaceP2:{
    type:String
  },
  surfaceP3:{
    type:String
  },
  surfacePK1:{
    type:String
  },
  surfacePK2:{
    type:String
  },
  surfaceP4:{
    type: String
  },
  surfaceP5:{
    type:String
  },
  surfaceP6:{
    type:String
  },
  surfacePK3:{
    type:String
  },
  surfacePK4:{
    type:String
  },
  occupationFiscale:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"occupationFiscale"
  },
  categorieLocal:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"categorieLocal"
  },
  uniteEvaluation:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"uniteEvaluation"
  }
})

// Export the Mongoose model
module.exports = mongoose.model('historiqueREV', historiqueREVSchema);
