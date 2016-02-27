'use strict';

describe('Directive: progressChart', function () {

  // load the directive's module and view
  beforeEach(module('nbaPlaygroundApp'));
  beforeEach(module('components/progressChart/progressChart.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<progress-chart></progress-chart>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the progressChart directive');
  }));
});
