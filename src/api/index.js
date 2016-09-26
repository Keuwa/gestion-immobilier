var express = require('express');
var app = express();
var historiqueBien = require('./historiqueBien/router');
var lot = require('./lot/router');
var uniteEvaluation = require('./uniteEvaluation/router');
var dossier = require('./dossier/router');
var proprietaire = require('./proprietaire/router');

app.use('/historiqueBien',historiqueBien);
app.use('/lot',lot);
app.use('/uniteEvaluation',uniteEvaluation);
app.use('/dossier',dossier);
app.use('/proprietaire',proprietaire);

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
};

// show description of all the API
app.get('/', function (req, res) {
  res.send(routesView);
});

module.exports = app;
