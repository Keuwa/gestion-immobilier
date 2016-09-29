const controller = require('./controller');
const express = require('express');
var historique75Router = express.Router();

//route inititiation

historique75Router.get('/',controller.get);
historique75Router.post('/',controller.post);
historique75Router.put('/:id',controller.update);
historique75Router.get('/:id',controller.getOne);
historique75Router.delete('/:id',controller.delete);

module.exports = historique75Router;
