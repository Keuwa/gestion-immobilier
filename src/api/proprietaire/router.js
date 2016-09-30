const controller = require('./controller');
const express = require('express');
var proprietaireRouter = express.Router();
var authController = require('../auth');

//route inititiation

proprietaireRouter.get('/',authController.isAuthenticated,controller.get);
proprietaireRouter.post('/',authController.isAuthenticated,controller.post);
proprietaireRouter.put('/:id',authController.isAuthenticated,controller.update);
proprietaireRouter.get('/:id',authController.isAuthenticated,controller.getOne);
proprietaireRouter.delete('/:id',authController.isAuthenticated,controller.delete);

module.exports = proprietaireRouter;
