'use strict';

angular.module('nbaPlaygroundApp.auth', [
  'nbaPlaygroundApp.constants',
  'nbaPlaygroundApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
