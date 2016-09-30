const controller = require('./controller');
const express = require('express');
var historique75Router = express.Router();
var authController = require('../auth');


//route inititiation

historique75Router.get('/',authController.isAuthenticated,controller.get);
historique75Router.post('/',authController.isAuthenticated,controller.post);
historique75Router.put('/:id',authController.isAuthenticated,controller.update);
historique75Router.get('/:id',authController.isAuthenticated,controller.getOne);
historique75Router.delete('/:id',authController.isAuthenticated,controller.delete);

module.exports = historique75Router;
