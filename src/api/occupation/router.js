const controller = require('./controller');
const express = require('express');
var occupationRouter = express.Router();
var authController = require('../auth');

//route inititiation

occupationRouter.get('/',authController.isAuthenticated,controller.get);
occupationRouter.post('/',authController.isAuthenticated,controller.post);
occupationRouter.put('/:id',authController.isAuthenticated,controller.update);
occupationRouter.get('/:id',authController.isAuthenticated,controller.getOne);
occupationRouter.delete('/:id',authController.isAuthenticated,controller.delete);

module.exports = occupationRouter;
