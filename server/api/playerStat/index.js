'use strict';

var express = require('express');
var controller = require('./playerStat.controller');

var router = express.Router();

router.get('/:id', controller.show);

module.exports = router;
