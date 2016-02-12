/**
 * PlayerStat model events
 */

'use strict';

import {EventEmitter} from 'events';
var PlayerStat = require('./playerStat.model');
var PlayerStatEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PlayerStatEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  PlayerStat.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    PlayerStatEvents.emit(event + ':' + doc._id, doc);
    PlayerStatEvents.emit(event, doc);
  }
}

export default PlayerStatEvents;
