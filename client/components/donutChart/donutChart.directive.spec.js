'use strict';

describe('Directive: donutChart', function () {

  // load the directive's module and view
  beforeEach(module('nbaPlaygroundApp'));
  beforeEach(module('components/donutChart/donutChart.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<donut-chart></donut-chart>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the donutChart directive');
  }));
});
