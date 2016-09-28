const controller = require('./controller');
const express = require('express');
var typeEnsembleRouter = express.Router();

//route inititiation

typeEnsembleRouter.get('/',controller.get);
typeEnsembleRouter.post('/',controller.post);
typeEnsembleRouter.put('/:id',controller.update);
typeEnsembleRouter.get('/:id',controller.getOne);
typeEnsembleRouter.delete('/:id',controller.delete);

module.exports = typeEnsembleRouter;
