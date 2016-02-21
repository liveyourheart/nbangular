'use strict';

describe('Service: playerTabs', function () {

  // load the service's module
  beforeEach(module('nbaPlaygroundApp'));

  // instantiate service
  var playerTabs;
  beforeEach(inject(function (_playerTabs_) {
    playerTabs = _playerTabs_;
  }));

  it('should do something', function () {
    expect(!!playerTabs).toBe(true);
  });

});
