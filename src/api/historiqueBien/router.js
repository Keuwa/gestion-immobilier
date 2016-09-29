const controller = require('./controller');
const express = require('express');
var historiqueBienRouter = express.Router();

//route inititiation

historiqueBienRouter.get('/',controller.get);
historiqueBienRouter.post('/',controller.post);
historiqueBienRouter.put('/:id',controller.update);
historiqueBienRouter.get('/:id',controller.getOne);
historiqueBienRouter.delete('/:id',controller.delete);

module.exports = historiqueBienRouter;
