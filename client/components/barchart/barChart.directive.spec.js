'use strict';

describe('Directive: barChart', function () {

  // load the directive's module and view
  beforeEach(module('nbaPlaygroundApp'));
  beforeEach(module('components/barchart/barChart.html'));

  var element, scope;

  // beforeEach(inject(function ($rootScope) {
  //   scope = $rootScope.$new();
  // }));
  //
  // it('should make hidden element visible', inject(function ($compile) {
  //   element = angular.element('<barChart></barChart>');
  //   element = $compile(element)(scope);
  //   scope.$apply();
  //   expect(element.text()).toBe('this is the barchart directive');
  // }));
});
