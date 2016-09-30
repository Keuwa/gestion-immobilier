const controller = require('./controller');
const express = require('express');
var historiqueBienRouter = express.Router();
var authController = require('../auth');

//route inititiation

historiqueBienRouter.get('/',authController.isAuthenticated,controller.get);
historiqueBienRouter.post('/',authController.isAuthenticated,controller.post);
historiqueBienRouter.put('/:id',authController.isAuthenticated,controller.update);
historiqueBienRouter.get('/:id',authController.isAuthenticated,controller.getOne);
historiqueBienRouter.delete('/:id',authController.isAuthenticated,controller.delete);

module.exports = historiqueBienRouter;
