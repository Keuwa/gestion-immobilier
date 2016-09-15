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
app.get('/', function (req, res) {
  res.send('Welcome to gestion-immobilier API ! <br/><br/>-Go to /api to Show all route of the API<br/><br/>-Go to /doc to see the API documentation');
});

// user API router
app.use('/api', api);

// Server listener
var port = process.env.PORT || settings.server.port;


// Server listening
server.listen(port, function () {
  console.log('API listening at port %s', port);
});

module.exports = server;
