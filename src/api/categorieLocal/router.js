const controller = require('./controller');
const express = require('express');
var categorieLocalRouter = express.Router();
var authController = require('../auth');

//route inititiation

categorieLocalRouter.get('/',authController.isAuthenticated,controller.get);
categorieLocalRouter.post('/',authController.isAuthenticated,controller.post);
categorieLocalRouter.put('/:id',authController.isAuthenticated,controller.update);
categorieLocalRouter.get('/:id',authController.isAuthenticated,controller.getOne);
categorieLocalRouter.delete('/:id',authController.isAuthenticated,controller.delete);

module.exports = categorieLocalRouter;
