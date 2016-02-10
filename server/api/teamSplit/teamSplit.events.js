/**
 * TeamSplit model events
 */

'use strict';

import {EventEmitter} from 'events';
var TeamSplit = require('./teamSplit.model');
var TeamSplitEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
TeamSplitEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  TeamSplit.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    TeamSplitEvents.emit(event + ':' + doc._id, doc);
    TeamSplitEvents.emit(event, doc);
  }
}

export default TeamSplitEvents;
