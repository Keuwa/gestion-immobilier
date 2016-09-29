const controller = require('./controller');
const express = require('express');
var occupationRouter = express.Router();

//route inititiation

occupationRouter.get('/',controller.get);
occupationRouter.post('/',controller.post);
occupationRouter.put('/:id',controller.update);
occupationRouter.get('/:id',controller.getOne);
occupationRouter.delete('/:id',controller.delete);

module.exports = occupationRouter;
