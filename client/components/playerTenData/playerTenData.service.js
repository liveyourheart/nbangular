'use strict';

angular.module('nbaPlaygroundApp')
  .service('playerTenData', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var stats = [
      {
        name: '',
        stat: 0
      },
      {
        name: '',
        stat: 0
      },
      {
        name: '',
        stat: 0
      },
      {
        name: '',
        stat: 0
      },
      {
        name: '',
        stat: 0
      },
      {
        name: '',
        stat: 0
      },
      {
        name: '',
        stat: 0
      },
      {
        name: '',
        stat: 0
      },
      {
        name: '',
        stat: 0
      },
      {
        name: '',
        stat: 0
      }
    ];
    return stats;
  });
