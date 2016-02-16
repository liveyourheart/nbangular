'use strict';

var express = require('express');
var controller = require('./teamSplit.controller');

var router = express.Router();

router.get('/:id', controller.show);

module.exports = router;
