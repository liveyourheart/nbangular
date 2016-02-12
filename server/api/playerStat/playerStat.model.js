'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var PlayerStatSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('PlayerStat', PlayerStatSchema);
