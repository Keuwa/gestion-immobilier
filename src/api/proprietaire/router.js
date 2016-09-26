const controller = require('./controller');
const express = require('express');
var proprietaireRouter = express.Router();

//route inititiation

proprietaireRouter.get('/',controller.get);
proprietaireRouter.post('/',controller.post);
proprietaireRouter.put('/:id',controller.update);
proprietaireRouter.get('/:id',controller.getOne);
proprietaireRouter.delete('/:id',controller.delete);

module.exports = proprietaireRouter;
