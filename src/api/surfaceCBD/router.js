const controller = require('./controller');
const express = require('express');
var surfaceCBDRouter = express.Router();

//route inititiation

surfaceCBDRouter.get('/',controller.get);
surfaceCBDRouter.post('/',controller.post);
surfaceCBDRouter.put('/:id',controller.update);
surfaceCBDRouter.get('/:id',controller.getOne);
surfaceCBDRouter.delete('/:id',controller.delete);

module.exports = surfaceCBDRouter;
