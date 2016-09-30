const controller = require('./controller');
const express = require('express');
var bienRouter = express.Router();
var authController = require('../auth');


//route inititiation

bienRouter.get('/',authController.isAuthenticated,controller.get);
bienRouter.post('/',authController.isAuthenticated,controller.post);
bienRouter.put('/:id',authController.isAuthenticated,controller.update);
bienRouter.get('/:id',authController.isAuthenticated,controller.getOne);
bienRouter.delete('/:id',authController.isAuthenticated,controller.delete);

module.exports = bienRouter;
