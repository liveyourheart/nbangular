'use strict';

angular.module('nbaPlaygroundApp')
  .service('teamTabs', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var tabs = [
      {
        id: 'roster',
        active: false,
        link: 'tab-menu-option-left'
      },
      {
        id: 'main',
        active: true,
        link: 'tab-menu-option-middle'
      },
      {
        id: 'charts',
        active: false,
        link: 'tab-menu-option-right'
      }
    ];
    return tabs;
  });
