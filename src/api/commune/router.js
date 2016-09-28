const controller = require('./controller');
const express = require('express');
var communeRouter = express.Router();

//route inititiation

communeRouter.get('/',controller.get);
communeRouter.post('/',controller.post);
communeRouter.put('/:id',controller.update);
communeRouter.get('/:id',controller.getOne);
communeRouter.delete('/:id',controller.delete);

module.exports = communeRouter;
