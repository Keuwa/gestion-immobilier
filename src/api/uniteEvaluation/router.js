const controller = require('./controller');
const express = require('express');
var uniteEvaluationRouter = express.Router();
var authController = require('../auth');


//route inititiation

uniteEvaluationRouter.get('/',authController.isAuthenticated,controller.get);
uniteEvaluationRouter.post('/',authController.isAuthenticated,controller.post);
uniteEvaluationRouter.put('/:id',authController.isAuthenticated,controller.update);
uniteEvaluationRouter.get('/:id',authController.isAuthenticated,controller.getOne);
uniteEvaluationRouter.delete('/:id',authController.isAuthenticated,controller.delete);


module.exports = uniteEvaluationRouter;
