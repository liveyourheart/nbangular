'use strict';

describe('Service: teamTabs', function () {

  // load the service's module
  beforeEach(module('nbaPlaygroundApp'));

  // instantiate service
  var teamTabs;
  beforeEach(inject(function (_teamTabs_) {
    teamTabs = _teamTabs_;
  }));

  it('should do something', function () {
    expect(!!teamTabs).toBe(true);
  });

});
