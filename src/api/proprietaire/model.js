// Init variable
var mongoose = require('mongoose');

// Define users schema
var proprietaireSchema = new mongoose.Schema({
  name: {
    type: String,
    required : true
  },
  adresse:{
    type: String
  },
  postcode:{
    type:String
  },
  city:{
    type:String
  },
  siren:{
    type:String
  },
  etablissement:{
    type:String
  },
  dossier:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"dossier"
  }
})

// Export the Mongoose model
module.exports = mongoose.model('proprietaire', proprietaireSchema);
