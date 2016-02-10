/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/rosters              ->  index
 * POST    /api/rosters              ->  create
 * GET     /api/rosters/:id          ->  show
 * PUT     /api/rosters/:id          ->  update
 * DELETE  /api/rosters/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Roster from './roster.model';
var nba = require('nba').usePromises();

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Rosters
export function index(req, res) {

  nba.api.commonTeamRoster({teamId: 1610612752})
  .then(respondWithResult(res))
  .catch(handleError(res));
}

// Gets a single Roster from the DB
export function show(req, res) {
  var teamId = req.params.id;
  console.log('it\'s working!');
  nba.api.commonTeamRoster({teamId: teamId})
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Roster in the DB
export function create(req, res) {
  Roster.createAsync(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Roster in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Roster.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Roster from the DB
export function destroy(req, res) {
  Roster.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
