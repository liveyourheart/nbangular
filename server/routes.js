/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';

export default function(app) {
  // Insert routes below
  app.use('/api/playerStats', require('./api/playerStat'));
  app.use('/api/players', require('./api/player'));
  app.use('/api/teamSplits', require('./api/teamSplit'));
  app.use('/api/teamStats', require('./api/teamStat'));
  app.use('/api/rosters', require('./api/roster'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
}
