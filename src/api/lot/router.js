const controller = require('./controller');
const express = require('express');
var lotRouter = express.Router();
var authController = require('../auth');

//route inititiation

lotRouter.get('/',authController.isAuthenticated,controller.get);
lotRouter.post('/',authController.isAuthenticated,controller.post);
lotRouter.put('/:id',authController.isAuthenticated,controller.update);
lotRouter.get('/:id',authController.isAuthenticated,controller.getOne);
lotRouter.delete('/:id',authController.isAuthenticated,controller.delete);


module.exports = lotRouter;
