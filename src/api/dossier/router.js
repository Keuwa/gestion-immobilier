const controller = require('./controller');
const express = require('express');
var authController = require('../auth');
var dossierRouter = express.Router();

//route inititiation

dossierRouter.get('/', authController.isAuthenticated,controller.get);
dossierRouter.post('/',authController.isAuthenticated,controller.post);
dossierRouter.put('/:id',authController.isAuthenticated,controller.update);
dossierRouter.get('/:id',authController.isAuthenticated,controller.getOne);
dossierRouter.delete('/:id',authController.isAuthenticated,controller.delete);

module.exports = dossierRouter;
