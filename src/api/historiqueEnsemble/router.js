const controller = require('./controller');
const express = require('express');
var historiqueEnsembleRouter = express.Router();
var authController = require('../auth');

//route inititiation

historiqueEnsembleRouter.get('/',authController.isAuthenticated,controller.get);
historiqueEnsembleRouter.post('/',authController.isAuthenticated,controller.post);
historiqueEnsembleRouter.put('/:id',authController.isAuthenticated,controller.update);
historiqueEnsembleRouter.get('/:id',authController.isAuthenticated,controller.getOne);
historiqueEnsembleRouter.delete('/:id',authController.isAuthenticated,controller.delete);

module.exports = historiqueEnsembleRouter;
