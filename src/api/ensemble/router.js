const controller = require('./controller');
const express = require('express');
var ensembleRouter = express.Router();
var authController = require('../auth');

//route inititiation

ensembleRouter.get('/',authController.isAuthenticated,controller.get);
ensembleRouter.post('/',authController.isAuthenticated,controller.post);
ensembleRouter.put('/:id',authController.isAuthenticated,controller.update);
ensembleRouter.get('/:id',authController.isAuthenticated,controller.getOne);
ensembleRouter.delete('/:id',authController.isAuthenticated,controller.delete);

module.exports = ensembleRouter;
