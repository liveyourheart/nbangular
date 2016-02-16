'use strict';

angular.module('nbaPlaygroundApp')
  .directive('donutChart', function () {
    return {
      templateUrl: 'components/donutChart/donutChart.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
