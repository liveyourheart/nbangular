'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var TeamSchema = new mongoose.Schema({
  teamID: Number,
  abbreviation: String,
  teamName: String,
  simpleName: String,
  location: String
});

export default mongoose.model('Team', TeamSchema);
