'use strict';

angular.module('nbaPlaygroundApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('player', {
        url:'/:id',
        templateUrl: 'app/main/player.html',
        controller: 'PlayerController',
        controllerAs: 'player'
      });
  });
