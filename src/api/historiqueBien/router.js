const controller = require('./controller');
const express = require('express');
var historiqueBienRouter = express.Router();

//route inititiation

historiqueBienRouter.get('/',controller.get);
historiqueBienRouter.post('/',controller.post);
historiqueBienRouter.put('/:id',controller.update);

module.exports = historiqueBienRouter;
