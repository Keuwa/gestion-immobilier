var express = require('express');
var app = express();
var dossier = require('./dossier/router');
var proprietaire = require('./proprietaire/router');
var exploitant = require('./exploitant/router');
var etablissement = require('./etablissement/router');
var commune = require('./commune/router');
var typeEnsemble = require('./typeEnsemble/router');
var ensemble = require('./ensemble/router');
var historiqueEnsemble = require('./historiqueEnsemble/router');
var lot = require('./lot/router');
var bien = require('./bien/router');
var occupation = require('./occupation/router');
var historiqueBien = require('./historiqueBien/router');
var surfaceCBD = require('./surfaceCBD/router');
var localType = require('./localType/router');
var historique75 = require('./historique75/router');
var occupationFiscale = require('./occupationFiscale/router');
var categorieLocal = require('./categorieLocal/router');
var uniteEvaluation = require('./uniteEvaluation/router');
var historiqueREV = require('./historiqueREV/router');

app.use('/historiqueBien',historiqueBien);
app.use('/lot',lot);
app.use('/uniteEvaluation',uniteEvaluation);
app.use('/dossier',dossier);
app.use('/proprietaire',proprietaire);
app.use('/exploitant',exploitant);
app.use('/etablissement',etablissement);
app.use('/commune',commune);
app.use('/typeEnsemble',typeEnsemble);
app.use('/ensemble',ensemble);
app.use('/historiqueEnsemble',historiqueEnsemble);
app.use('/bien',bien);
app.use('/occupation',occupation);
app.use('/surfaceCBD',surfaceCBD);
app.use('/historique75',historique75);
app.use('/localType',localType);
app.use('/occupationFiscale',occupationFiscale);
app.use('/categorieLocal',categorieLocal);
app.use('/historiqueREV',historiqueREV);

// JSON description of all the route of the API
var routesView = {
  historiqueBien: {
    getAll: '/historiqueBien',
    post: '/historiqueBien',
    getHistoriqueBien: '/historiqueBien/:id'
  },
  lot: {
    getAll: '/lot',
    post: '/lot',
    updateHistoriqueBien: '/lot/:id'
  },
  uniteEvaluation: {
    getAll: '/uniteEvaluation',
    post: '/uniteEvaluation',
    updateHistoriqueBien: '/uniteEvaluation/:id'
  },
  dossier: {
    getAll: '/dossier',
    post: '/dossier',
    uptdatedossier: '/dossier/:id',
    deletedossier: '/dossier/:id',
    getdossier: '/dossier/:id'
  },
  proprietaire: {
    getAll: '/proprietaire',
    post: '/proprietaire',
    uptdateproprietaire: '/proprietaire/:id',
    deleteproprietaire: '/proprietaire/:id',
    getproprietaire: '/proprietaire/:id'
  },
  Exploitant: {
    getAll: '/exploitant',
    post: '/exploitant',
    uptdateExploitant: '/exploitant/:id',
    deleteExploitant: '/exploitant/:id',
    getExploitant: '/exploitant/:id'
  },
  etablissement: {
    getAll: '/etablissement',
    post: '/etablissement',
    uptdateetablissement: '/etablissement/:id',
    deleteetablissement: '/etablissement/:id',
    getetablissement: '/etablissement/:id'
  },
  commune: {
    getAll: '/commune',
    post: '/commune',
    uptdatecommune: '/commune/:id',
    deletecommune: '/commune/:id',
    getcommune: '/commune/:id'
  },
  typeEnsemble: {
    getAll: '/typeEnsemble',
    post: '/typeEnsemble',
    uptdatetypeEnsemble: '/typeEnsemble/:id',
    deletetypeEnsemble: '/typeEnsemble/:id',
    gettypeEnsemble: '/typeEnsemble/:id'
  },
  ensemble: {
    getAll: '/ensemble',
    post: '/ensemble',
    uptdateensemble: '/ensemble/:id',
    deleteensemble: '/ensemble/:id',
    getensemble: '/ensemble/:id'
  },
};

// show description of all the API
app.get('/', function (req, res) {
  res.send(routesView);
});

module.exports = app;
