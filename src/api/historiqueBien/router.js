const controller = require('./controller');
const express = require('express');
var historiqueBienRouter = express.Router();

//route inititiation

historiqueBienRouter.get('/',controller.get);

module.exports = historiqueBienRouter;
