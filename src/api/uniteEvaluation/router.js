const controller = require('./controller');
const express = require('express');
var uniteEvaluationRouter = express.Router();

//route inititiation

uniteEvaluationRouter.get('/',controller.get);

module.exports = uniteEvaluationRouter;
