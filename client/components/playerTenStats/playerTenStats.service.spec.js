'use strict';

describe('Service: playerTenStats', function () {

  // load the service's module
  beforeEach(module('nbaPlaygroundApp'));

  // instantiate service
  var playerTenStats;
  beforeEach(inject(function (_playerTenStats_) {
    playerTenStats = _playerTenStats_;
  }));

  it('should do something', function () {
    expect(!!playerTenStats).toBe(true);
  });

});
