'use strict';

describe('Directive: barChartSmall', function () {

  // load the directive's module
  beforeEach(module('nbaPlaygroundApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<bar-chart-small></bar-chart-small>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the barChartSmall directive');
  }));
});
