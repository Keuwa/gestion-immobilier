const controller = require('./controller');
const express = require('express');
var lotRouter = express.Router();

//route inititiation

lotRouter.get('/',controller.get);

module.exports = lotRouter;
