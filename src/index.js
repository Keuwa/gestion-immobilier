var express = require("express")
var path = require('path');
var app = require('./server');
var api = require('./api');
var mongoose = require('mongoose');
var settings = require('./api/settings');
var _ = require('lodash');
var env = process.env.NODE_ENV;
var server = require('http').Server(app);

// Init mongodb connexion
if(env === 'production') {
  mongoose.connect(settings.db.url.prod);
}
else {
  mongoose.connect(settings.db.url.dev);
}

// Home request API
/*app.get('/', function (req, res) {
  res.send('Welcome to gestion-immobilier API ! <br/><br/>-Go to /api to Show all route of the API<br/><br/>-Go to /doc to see the API documentation');
});*/

// universal routing and rendering
/*app.get('/', (req, res) => {
  res.send("Bonjour");
});
*/

app.use('/static', express.static(path.resolve(__dirname + '/public/static/')));

app.use('/app', function(req, res, next) {
  console.log(__dirname + '/public/static/index.html');
	res.sendFile(path.resolve(__dirname + '/public/static/index.html'));
});

app.use('/api', api);

// user API router

// Server listener
var port = process.env.PORT || settings.server.port;


// Server listening
server.listen(port, function () {
  console.log('API listening at port %s', port);
});

module.exports = server;
