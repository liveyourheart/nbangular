'use strict';

angular.module('nbaPlaygroundApp')
  .service('playerSplits', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var ps = [
      {
        name: 'Season Average',
        stat: 1
      },
      {
        name: 'Career Average',
        stat: 1
      },
      {
        name: 'Season High',
        stat: 1
      },
      {
        name: 'CareerHigh',
        stat: 1
      },
    ];
    return ps;
  });
