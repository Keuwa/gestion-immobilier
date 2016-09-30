const controller = require('./controller');
const express = require('express');
var typeEnsembleRouter = express.Router();
var authController = require('../auth');

//route inititiation

typeEnsembleRouter.get('/',authController.isAuthenticated,controller.get);
typeEnsembleRouter.post('/',authController.isAuthenticated,controller.post);
typeEnsembleRouter.put('/:id',authController.isAuthenticated,controller.update);
typeEnsembleRouter.get('/:id',authController.isAuthenticated,controller.getOne);
typeEnsembleRouter.delete('/:id',authController.isAuthenticated,controller.delete);

module.exports = typeEnsembleRouter;
