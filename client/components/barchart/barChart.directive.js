'use strict';

angular.module('nbaPlaygroundApp')
  .directive('barChart', function ($parse) {

     var directiveDefinitionObject = {

         restrict: 'E',
         replace: false,
         scope: {data: '=chartData'},
         link: function (scope, element, attrs) {
           var chart = d3.select(element[0]);
           chart.append('div').attr('class', 'chart')
            .selectAll('div')
            .data(scope.data).enter().append('div')
            .transition().ease('elastic')
            .style('width', function(d) { return d + 'px'; })
            .text(function(d) { return d  });

         }
      };
      return directiveDefinitionObject;
   });
