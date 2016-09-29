const controller = require('./controller');
const express = require('express');
var bienRouter = express.Router();

//route inititiation

bienRouter.get('/',controller.get);
bienRouter.post('/',controller.post);
bienRouter.put('/:id',controller.update);
bienRouter.get('/:id',controller.getOne);
bienRouter.delete('/:id',controller.delete);

module.exports = bienRouter;
