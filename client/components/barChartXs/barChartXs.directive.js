'use strict';

angular.module('nbaPlaygroundApp')
  .directive('barChartXs', function () {
    var directiveDefinitionObject = {

      restrict: 'E',
      replace: false,
      scope: {
        data: '=data',
        chartid: '=chartid',
        chartTitle: '=chartTitle'
      },
      link: function(scope, element, attrs) {
        var w = 225, h = 150;
        var xMult = w / scope.data.length;
        var barWidth = xMult - 2;
        var justStats = [];
        var chartId = scope.chartid;
        var textId = chartId + 'text';
        var chartTitleId = scope.chartTitle;
        var chartTitle = d3.select(chartTitleId).text();

        for(var i = 0; i < scope.data.length; i++){
          justStats.push(scope.data[i].stat);
        }

        scope.$watch('data', function(newVal, oldVal){
          if(newVal != null){
            justStats = [];
            for(var i = 0; i < scope.data.length; i++){
              justStats.push(scope.data[i].stat);
            }
          }
          update();
        });

        var yScale = d3.scale.linear()
          .domain([0, d3.max(justStats)])
          .range([0, h]);

        var svg = d3.select(element[0]).append('svg');

        svg.attr('width', w);
        svg.attr('height', h);
        svg.selectAll('rect')
          .data(scope.data)
          .enter()
          .append('rect')
          .attr('x', function(d, i) {
            return i * xMult;
          })
          .attr('y', function(d) {
            return h - 10 - yScale(d.stat);
          })
          .attr('class', 'bar '+chartId)
          .attr('width', barWidth)
          .attr('fill', '#000')
          .style('height', function(d) {
            return h - yScale(d) + 5;
          });
        svg.selectAll('rect')
          .data(scope.data)
          .on('mouseover', function(d){
            var stat;
            if(!isInt(d.stat)){
              stat = d.stat.toFixed(2);
            }
            else stat = d.stat;
            d3.select(chartTitleId)
              .text(d.name + ' - ' + stat);
          })
          .on('mouseout', function(){
            d3.select(chartTitleId)
              .text(chartTitle);
          });
        svg.selectAll('text')
          .data(scope.data)
          .enter()
          .append('text')
          .text(function(d) {
            console.log(d.stat)
            return d.stat;
          })
          .attr({
            'class': 'bar-text ' +textId ,
            'text-anchor': 'middle',
            'font-family': 'Helvetica',
            'font-weight': 'bold',
            'height': 140,
            x: function(d, i) {
              return (i * xMult) + (barWidth / 2);
            },
            y: 140,
            'font-size': 8,
            'fill': '#fff'
          });

          function update(){
            yScale = d3.scale.linear()
              .domain([0, d3.max(justStats)])
              .range([0, h]);

            var rect = d3.selectAll('rect');
            d3.selectAll('.' +chartId)
              .data(scope.data)
              .style('height', function(d) {
                return yScale(d.stat) + 5;
              })
              .attr('x', function(d, i) {
                return i * xMult;
              })
              .attr('y', function(d) {
                return h - 10 - yScale(d.stat);
              });

            d3.selectAll('.'+textId)
              .data(scope.data)
              .text(function(d){
                if(!isInt(d.stat)){
                  return d.stat.toFixed(2);
                } else return d.stat;
              });
          }

          function isInt(n){
            return n % 1 === 0;
          }
      }
    };
    return directiveDefinitionObject;
  });
