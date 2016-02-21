'use strict';

angular.module('nbaPlaygroundApp')
  .service('playerTabs', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var tabs = [
      {
        id: 'stats',
        active: false,
        link: 'tab-menu-option-left'
      },
      {
        id: 'info',
        active: true,
        link: 'tab-menu-option-middle'
      },
      {
        id: 'last10',
        active: false,
        link: 'tab-menu-option-right'
      }
    ];

    return tabs;
  });
