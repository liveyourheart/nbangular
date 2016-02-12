/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/teamStats              ->  index
 * POST    /api/teamStats              ->  create
 * GET     /api/teamStats/:id          ->  show
 * PUT     /api/teamStats/:id          ->  update
 * DELETE  /api/teamStats/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import TeamStat from './teamStat.model';
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

// Gets a list of TeamStats
export function index(req, res) {
  nba.api.teamPlayerDashboard([])
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single TeamStat from the DB
export function show(req, res) {
  nba.api.teamInfoCommon({teamId: req.params.id})
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new TeamStat in the DB
export function create(req, res) {
  TeamStat.createAsync(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing TeamStat in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  TeamStat.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a TeamStat from the DB
export function destroy(req, res) {
  TeamStat.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
