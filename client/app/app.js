'use strict';

angular.module('nbaPlaygroundApp', [
  'nbaPlaygroundApp.auth',
  'nbaPlaygroundApp.admin',
  'nbaPlaygroundApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
