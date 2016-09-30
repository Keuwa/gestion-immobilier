const controller = require('./controller');
const express = require('express');
var localTypeRouter = express.Router();
var authController = require('../auth');

//route inititiation

localTypeRouter.get('/',authController.isAuthenticated,controller.get);
localTypeRouter.post('/',authController.isAuthenticated,controller.post);
localTypeRouter.put('/:id',authController.isAuthenticated,controller.update);
localTypeRouter.get('/:id',authController.isAuthenticated,controller.getOne);
localTypeRouter.delete('/:id',authController.isAuthenticated,controller.delete);

module.exports = localTypeRouter;
