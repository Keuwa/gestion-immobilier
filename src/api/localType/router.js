const controller = require('./controller');
const express = require('express');
var localTypeRouter = express.Router();

//route inititiation

localTypeRouter.get('/',controller.get);
localTypeRouter.post('/',controller.post);
localTypeRouter.put('/:id',controller.update);
localTypeRouter.get('/:id',controller.getOne);
localTypeRouter.delete('/:id',controller.delete);

module.exports = localTypeRouter;
