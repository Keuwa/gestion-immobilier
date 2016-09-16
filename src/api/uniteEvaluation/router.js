const controller = require('./controller');
const express = require('express');
var uniteEvaluationRouter = express.Router();

//route inititiation

uniteEvaluationRouter.get('/',controller.get);
uniteEvaluationRouter.post('/',controller.post);

module.exports = uniteEvaluationRouter;
