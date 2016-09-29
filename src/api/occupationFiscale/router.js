const controller = require('./controller');
const express = require('express');
var occupationFiscaleRouter = express.Router();

//route inititiation

occupationFiscaleRouter.get('/',controller.get);
occupationFiscaleRouter.post('/',controller.post);
occupationFiscaleRouter.put('/:id',controller.update);
occupationFiscaleRouter.get('/:id',controller.getOne);
occupationFiscaleRouter.delete('/:id',controller.delete);

module.exports = occupationFiscaleRouter;
