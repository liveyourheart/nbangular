'use strict';

angular.module('nbaPlaygroundApp')
  .directive('progressChartSmall', function () {
    return {
      templateUrl: 'components/progressChartSmall/progressChartSmall.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
