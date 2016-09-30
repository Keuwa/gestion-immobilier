const controller = require('./controller');
const express = require('express');
var occupationFiscaleRouter = express.Router();
var authController = require('../auth');

//route inititiation

occupationFiscaleRouter.get('/',authController.isAuthenticated,controller.get);
occupationFiscaleRouter.post('/',authController.isAuthenticated,controller.post);
occupationFiscaleRouter.put('/:id',authController.isAuthenticated,controller.update);
occupationFiscaleRouter.get('/:id',authController.isAuthenticated,controller.getOne);
occupationFiscaleRouter.delete('/:id',authController.isAuthenticated,controller.delete);

module.exports = occupationFiscaleRouter;
