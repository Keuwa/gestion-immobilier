const controller = require('./controller');
const express = require('express');
var dossierRouter = express.Router();

//route inititiation

dossierRouter.get('/',controller.get);
dossierRouter.post('/',controller.post);
dossierRouter.put('/:id',controller.update);
dossierRouter.get('/:id',controller.getOne);
dossierRouter.delete('/:id',controller.delete);

module.exports = dossierRouter;
