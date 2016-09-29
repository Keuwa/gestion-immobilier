const controller = require('./controller');
const express = require('express');
var historiqueREVRouter = express.Router();

//route inititiation

historiqueREVRouter.get('/',controller.get);
historiqueREVRouter.post('/',controller.post);
historiqueREVRouter.put('/:id',controller.update);
historiqueREVRouter.get('/:id',controller.getOne);
historiqueREVRouter.delete('/:id',controller.delete);

module.exports = historiqueREVRouter;
