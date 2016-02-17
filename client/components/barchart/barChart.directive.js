'use strict';

angular.module('nbaPlaygroundApp')
  .directive('barChart', function($parse) {

    var directiveDefinitionObject = {

      restrict: 'E',
      replace: false,
      scope: {
        data: '=data'
      },
      link: function(scope, element, attrs) {

        var dataset = scope.data;
        var w = 600,
          h = 250;
        var multiplier = 5;
        var xMult = w / dataset.length;
        var barWidth = xMult - 2;
        var chartTitle = d3.select('.bar-chart-title').text();
        var justStats = [];

        for(var i = 0; i < dataset.length; i++){
          justStats.push(dataset[i].stat);
        }
        console.log(justStats);

        var yScale = d3.scale.linear()
          .domain([0, d3.max(justStats) + 5])
          .range([0, h]);

        var svg = d3.select(element[0]).append("svg");

        svg.attr('width', w);
        svg.attr('height', h);

        svg.selectAll('rect')
          .data(justStats)
          .enter()
          .append('rect')
          .attr('class', 'bar')
          .attr('x', function(d, i) {
            return i * xMult;
          })
          .attr('y', function(d) {
            return h - 10 - yScale(d);
          })
          .attr('width', barWidth)
            .attr('fill', '#000')
            .style('height', function(d) {
              return yScale(d) + 5;
            });

        svg.selectAll('rect')
          .data(dataset)
          .on('mouseover', function(d){
            d3.select('.bar-chart-title')
              .text(d.name);
          })
          .on('mouseout', function(d){
            d3.select('.bar-chart-title')
              .text(chartTitle);
          })

        svg.selectAll('text')
          .data(dataset)
          .enter()
          .append('text')
          .text(function(d) {
            return d.stat;
          })
          .attr({
            'class': 'bar-text',
            'text-anchor': 'middle',
            'font-family': 'Helvetica',
            'font-weight': 'bold',
            'height': 240,
            x: function(d, i) {
              return (i * xMult) + (barWidth / 2);
            },
            y: 240,
            'font-size': 24,
            'fill': '#fff'
          });


      }
    };
    return directiveDefinitionObject;
  });
