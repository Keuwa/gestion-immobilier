// Init variable
var mongoose = require('mongoose');

// Define users schema
var localTypeSchema = new mongoose.Schema({
  year: {
    type: Date
  },
  section:{
    type:String
  },
  plan:{
    type:String
  },
  adresse: {
    type: String
  },
  activite: {
    type: Number
  },
  surfacePonderee: {
    type: Number
  },
  nombreElement: {
    type: Number
  },
  VL: {
    type: Number
  },
  VLUm2: {
    type: Number
  },
  VLUElement: {
    type: Number
  },
  observation: {
    type: String
  }
})

// Export the Mongoose model
module.exports = mongoose.model('localType', localTypeSchema);
