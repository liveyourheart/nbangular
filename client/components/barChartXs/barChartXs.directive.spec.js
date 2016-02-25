'use strict';

describe('Directive: barChartXs', function () {

  // load the directive's module
  beforeEach(module('nbaPlaygroundApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<bar-chart-xs></bar-chart-xs>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the barChartXs directive');
  }));
});
