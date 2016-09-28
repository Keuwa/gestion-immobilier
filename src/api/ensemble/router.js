const controller = require('./controller');
const express = require('express');
var ensembleRouter = express.Router();

//route inititiation

ensembleRouter.get('/',controller.get);
ensembleRouter.post('/',controller.post);
ensembleRouter.put('/:id',controller.update);
ensembleRouter.get('/:id',controller.getOne);
ensembleRouter.delete('/:id',controller.delete);

module.exports = ensembleRouter;
