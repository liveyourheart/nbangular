/**
 * Roster model events
 */

'use strict';

import {EventEmitter} from 'events';
var Roster = require('./roster.model');
var RosterEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
RosterEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Roster.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    RosterEvents.emit(event + ':' + doc._id, doc);
    RosterEvents.emit(event, doc);
  }
}

export default RosterEvents;
