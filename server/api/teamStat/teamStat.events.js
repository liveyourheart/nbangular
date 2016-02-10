/**
 * TeamStat model events
 */

'use strict';

import {EventEmitter} from 'events';
var TeamStat = require('./teamStat.model');
var TeamStatEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
TeamStatEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  TeamStat.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    TeamStatEvents.emit(event + ':' + doc._id, doc);
    TeamStatEvents.emit(event, doc);
  }
}

export default TeamStatEvents;
