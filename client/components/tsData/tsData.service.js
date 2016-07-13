'use strict';

angular.module('nbaPlaygroundApp')
  .service('tsData', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var tsData = [
      {
        name: 'Overall',
        stat: 1
      },
      {
        name: 'In Wins',
        stat: 1
      },
      {
        name: 'In Losses',
        stat: 1
      },
      {
        name: 'At Home',
        stat: 1
      },
      {
        name: 'On The Road',
        stat: 1
      },
      {
        name: 'In October',
        stat: 1
      },
      {
        name: 'In November',
        stat: 1
      },
      {
        name: 'In December',
        stat: 1
      },
      {
        name: 'In January',
        stat: 1
      },
      {
        name: 'In February',
        stat: 1
      },
      {
        name: 'In March',
        stat: 1
      },
      {
        name: 'In April',
        stat: 1
      },
      {
        name: 'In Back To Backs',
        stat: 1
      },
      {
        name: 'On One Day Rest',
        stat: 1

      },
      {
        name: 'On Two Days Rest',
        stat: 1

      }
    ];

    return tsData;
  });
