const controller = require('./controller');
const express = require('express');
var etablissementRouter = express.Router();
var authController = require('../auth');


//route inititiation

etablissementRouter.get('/',authController.isAuthenticated,controller.get);
etablissementRouter.post('/',authController.isAuthenticated,controller.post);
etablissementRouter.put('/:id',authController.isAuthenticated,controller.update);
etablissementRouter.get('/:id',authController.isAuthenticated,controller.getOne);
etablissementRouter.delete('/:id',authController.isAuthenticated,controller.delete);

module.exports = etablissementRouter;
