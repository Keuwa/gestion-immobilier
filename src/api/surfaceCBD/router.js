const controller = require('./controller');
const express = require('express');
var surfaceCBDRouter = express.Router();
var authController = require('../auth');

//route inititiation

surfaceCBDRouter.get('/',authController.isAuthenticated,controller.get);
surfaceCBDRouter.post('/',authController.isAuthenticated,controller.post);
surfaceCBDRouter.put('/:id',authController.isAuthenticated,controller.update);
surfaceCBDRouter.get('/:id',authController.isAuthenticated,controller.getOne);
surfaceCBDRouter.delete('/:id',authController.isAuthenticated,controller.delete);

module.exports = surfaceCBDRouter;
