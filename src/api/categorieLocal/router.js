const controller = require('./controller');
const express = require('express');
var categorieLocalRouter = express.Router();

//route inititiation

categorieLocalRouter.get('/',controller.get);
categorieLocalRouter.post('/',controller.post);
categorieLocalRouter.put('/:id',controller.update);
categorieLocalRouter.get('/:id',controller.getOne);
categorieLocalRouter.delete('/:id',controller.delete);

module.exports = categorieLocalRouter;
