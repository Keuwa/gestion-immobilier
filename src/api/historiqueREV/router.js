const controller = require('./controller');
const express = require('express');
var historiqueREVRouter = express.Router();
var authController = require('../auth');

//route inititiation

historiqueREVRouter.get('/',authController.isAuthenticated,controller.get);
historiqueREVRouter.post('/',authController.isAuthenticated,controller.post);
historiqueREVRouter.put('/:id',authController.isAuthenticated,controller.update);
historiqueREVRouter.get('/:id',authController.isAuthenticated,controller.getOne);
historiqueREVRouter.delete('/:id',authController.isAuthenticated,controller.delete);

module.exports = historiqueREVRouter;
