const controller = require('./controller');
const express = require('express');
var historiqueEnsembleRouter = express.Router();

//route inititiation

historiqueEnsembleRouter.get('/',controller.get);
historiqueEnsembleRouter.post('/',controller.post);
historiqueEnsembleRouter.put('/:id',controller.update);
historiqueEnsembleRouter.get('/:id',controller.getOne);
historiqueEnsembleRouter.delete('/:id',controller.delete);

module.exports = historiqueEnsembleRouter;
