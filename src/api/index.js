var express = require('express');
var app = express();
var historiqueBien = require('./historiqueBien/router');
var lot = require('./lot/router');
var uniteEvaluation = require('./uniteEvaluation/router');

app.use('/historiqueBien',historiqueBien);
app.use('/lot',lot);
app.use('/uniteEvaluation',uniteEvaluation);

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
    getHistoriqueBien: '/lot/:id'
  },
  uniteEvaluation: {
    getAll: '/uniteEvaluation',
    post: '/uniteEvaluation',
    getHistoriqueBien: '/uniteEvaluation/:id'
  },
};

// show description of all the API
app.get('/', function (req, res) {
  res.send(routesView);
});

module.exports = app;
