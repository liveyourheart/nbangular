'use strict';

angular.module('nbaPlaygroundApp')
  .directive('progressChart', function() {
    var directiveDefinitionObject = {

      restrict: 'E',
      replace: true,
      templateUrl: 'components/progressChart/progressChart.html',
      scope: {
        data: '=data',
        primaryColor: '=pc',
        secondaryColor: '=sc',
        width: '=w',
        height: '=h',
        fontSize: '=font'
      },
      link: function(scope, element, attrs) {
        var sc = scope.secondaryColor;
        var pc = scope.primaryColor;
        var percent;
        if(scope.data >= 0 && scope.data >= 1){
          percent = scope.data * 100;
        } else{
          percent = 0;
        }


        var ratio = percent / 100;

        var pie = d3.layout.pie()
          .value(function(d) {
            return d
          })
          .sort(null);

        var w = scope.width,
            h = scope.height;

        var fontSize, ir, textDy;

        if(w >= 250){
          fontSize= '60px';
          ir = 65;
          textDy = 25;
        }else if(w >= 200){
          fontSize='50px';
          ir = 55;
          textDy = 20;
        }else if(w >= 150){
          fontSize='40px';
          ir = 45;
          textDy = 15;
        }else if(w >= 100){
          fontSize='25px';
          ir = 30;
          textDy = 10;
        }else if(w >= 80){
          fontSize='20px';
          ir = 25;
          textDy = 10;
        }else{
          fontSize='18px';
          ir = 25;
          textDy = 10;
        }

        var outerRadius = (w / 2);
        var innerRadius = ir;

        //background, arc, text color order
        var color = [sc, pc, pc];

        scope.$watch('primaryColor', function(){
          animate();
          setTimeout(animate,0);
        });

        scope.$watch('data', function(newVal){
          percent = newVal * 100;
          animate();
        });

        var arc = d3.svg.arc()
          .innerRadius(0)
          .outerRadius(outerRadius)
          .startAngle(0)
          .endAngle(2 * Math.PI);


        var arcLine = d3.svg.arc()
          .innerRadius(innerRadius)
          .outerRadius(outerRadius - 5)
          .startAngle(0);

        var svg = d3.select(element[0])
          .append('svg')
          .attr({
            width: w,
            height: h,
            class: 'shadow'
          }).append('g')
          .attr({
            transform: 'translate(' + w / 2 + ',' + h / 2 + ')'
          });

        var defs = svg.append('svg:defs');

        var inset_shadow = defs.append('svg:filter')
          .attr('id', 'inset-shadow');

        inset_shadow.append('svg:feOffset')
          .attr({
            dx: 0,
            dy: 0
          });

        inset_shadow.append('svg:feComposite')
          .attr({
            operator: 'out',
            in : 'SourceGraphic',
            in2: 'offset-blur',
            result: 'inverse'
          });

        inset_shadow.append('svg:feFlood')
          .attr({
            'flood-color': 'black',
            'flood-opacity': .7,
            result: 'color'
          });

        inset_shadow.append('svg:feComposite')
          .attr({
            operator: 'in',
            in : 'color',
            in2: 'inverse',
            result: 'shadow'
          });

        inset_shadow.append('svg:feComposite')
          .attr({
            operator: 'over',
            in : 'shadow',
            in2: 'SourceGraphic'
          });

        var path = svg.append('path')
          .attr({
            d: arc,
            class: 'progress-chart-background'
          })
          .style({
            fill: color[0],
            filter: 'url(#inset-shadow)'
          });


        var pathForeground = svg.append('path')
          .datum({
            endAngle: 0
          })
          .attr({
            d: arcLine,
            class: 'progress-chart-bar'
          })
          .style({
            fill: color[1],
            filter: 'url(#inset-shadow)'
          });


        var middleCount = svg.append('text')
          .datum(0)
          .text(function(d) {
            return d;
          })

        .attr({
            class: 'progress-chart-text',
            'text-anchor': 'middle',
            dy: textDy
          })
          .style({
            fill: d3.rgb(color[2]),
            'font-size': fontSize,
            'font-weight': 'bold',
            // filter: 'url(#inset-shadow)'
          });

        var oldValue = 0;
        var arcTween = function(transition, newValue, oldValue) {
          transition.attrTween('d', function(d) {
            var interpolate = d3.interpolate(d.endAngle, ((2 * Math.PI)) * (newValue / 100));

            var interpolateCount = d3.interpolate(oldValue, newValue);
            return function(t) {
              d.endAngle = interpolate(t);
              var text;
              if(percent == 100){
                text = 100;
              } else{
                text = Math.round(percent) + '%';
              }
              middleCount.text(text);
              return arcLine(d);
            };
          });
        };


        var animate = function() {

          pathForeground.transition()
            .duration(750)
            .ease('cubic')
            .call(arcTween, percent, oldValue);
          oldValue = percent;
          setTimeout(animate, 3000);
        };

        var initSize = function(){

        };

         setTimeout(animate,0);
      }
    };
    return directiveDefinitionObject;
  });
