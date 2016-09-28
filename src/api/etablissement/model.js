// Init variable
var mongoose = require('mongoose');

// Define users schema
var etablissementSchema = new mongoose.Schema({
  siret: {
    type: String,
    required : true
  },
  nafcode:{
    type:String
  },
  siege:{
    type:Boolean
  },
  mainEtablissement:{
    type:Boolean
  },
  adresse:{
    type:String
  },
  postcode:{
    type:String
  },
  city:{
    type:String
  },
  openingDate:{
    type:Date
  },
  closingDate:{
    type:Date
  },
  QVP:{
    type:Boolean
  },
  ZFA:{
    type:String,
    enum:["normal","majore"]
  },
  ZFU:{
    type:Boolean
  },
  ZFUGeneration:{
    type:String
  },
  Tascom:{
    type:Boolean
  },
  exploitant:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"exploitant"
  }
})

// Export the Mongoose model
module.exports = mongoose.model('etablissement', etablissementSchema);
