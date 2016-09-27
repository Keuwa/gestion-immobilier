const controller = require('./controller');
const express = require('express');
var etablissementRouter = express.Router();

//route inititiation

etablissementRouter.get('/',controller.get);
etablissementRouter.post('/',controller.post);
etablissementRouter.put('/:id',controller.update);
etablissementRouter.get('/:id',controller.getOne);
etablissementRouter.delete('/:id',controller.delete);

module.exports = etablissementRouter;
