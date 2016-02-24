'use strict';

angular.module('nbaPlaygroundApp')
  .service('playerTenData', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var stats = [
      {
        name: 'Choose a Stat',
        stat: 0
      },
      {
        name: 'Choose a Stat',
        stat: 0
      },
      {
        name: 'Choose a Stat',
        stat: 0
      },
      {
        name: 'Choose a Stat',
        stat: 0
      },
      {
        name: 'Choose a Stat',
        stat: 0
      },
      {
        name: 'Choose a Stat',
        stat: 0
      },
      {
        name: 'Choose a Stat',
        stat: 0
      },
      {
        name: 'Choose a Stat',
        stat: 0
      },
      {
        name: 'Choose a Stat',
        stat: 0
      },
      {
        name: 'Choose a Stat',
        stat: 0
      }
    ];
    return stats;
  });
