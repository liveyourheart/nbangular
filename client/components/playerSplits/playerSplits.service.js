'use strict';

angular.module('nbaPlaygroundApp')
  .service('playerSplits', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var ps = [
      {
        name: 'Season Average',
        stat: 0
      },
      {
        name: 'Career Average',
        stat: 0
      },
      {
        name: 'Season High',
        stat: 0
      },
      {
        name: 'CareerHigh',
        stat: 0
      },
    ];
    return ps;
  });
