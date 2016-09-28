const controller = require('./controller');
const express = require('express');
var lotRouter = express.Router();

//route inititiation

lotRouter.get('/',controller.get);
lotRouter.post('/',controller.post);
lotRouter.put('/:id',controller.update);
lotRouter.get('/:id',controller.getOne);
lotRouter.delete('/:id',controller.delete);


module.exports = lotRouter;
