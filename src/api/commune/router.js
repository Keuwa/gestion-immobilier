const controller = require('./controller');
const express = require('express');
var communeRouter = express.Router();
var authController = require('../auth');

//route inititiation

communeRouter.get('/',authController.isAuthenticated,controller.get);
communeRouter.post('/',authController.isAuthenticated,controller.post);
communeRouter.put('/:id',authController.isAuthenticated,controller.update);
communeRouter.get('/:id',authController.isAuthenticated,controller.getOne);
communeRouter.delete('/:id',authController.isAuthenticated,controller.delete);

module.exports = communeRouter;
