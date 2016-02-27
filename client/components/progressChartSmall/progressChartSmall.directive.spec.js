'use strict';

describe('Directive: progressChartSmall', function () {

  // load the directive's module and view
  beforeEach(module('nbaPlaygroundApp'));
  beforeEach(module('components/progressChartSmall/progressChartSmall.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<progress-chart-small></progress-chart-small>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the progressChartSmall directive');
  }));
});
