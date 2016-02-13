'use strict';

import _ from 'lodash';
var nba = require('nba').usePromises();

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a single Player from the DB
export function show(req, res) {
  nba.api.playerInfo({playerId: req.params.id})
    .then(respondWithResult(res))
    .catch(handleError(res));
}
