var app = require('./server');
var api = require('./api');
var mongoose = require('mongoose');
var settings = require('./api/settings');
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
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
app.get('/', (req, res) => {
  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {

      // in case of error display the error message
      if (err) {
        return res.status(500).send(err.message);
      }

      // in case of redirect propagate the redirect to the browser
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      // generate the React markup for the current route
      let markup;
      if (renderProps) {
        // if the current route matched we have renderProps
        markup = renderToString(<RouterContext {...renderProps}/>);
      } else {
        // otherwise we can render a 404 page
        /*markup = renderToString(<NotFoundPage/>);*/
        res.status(404);
      }

      // render the index template with the embedded React markup
      //return res.render('index', { markup });
    }
  );
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
