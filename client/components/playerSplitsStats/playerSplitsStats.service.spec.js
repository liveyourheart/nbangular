'use strict';

describe('Service: playerSplitsStats', function () {

  // load the service's module
  beforeEach(module('nbaPlaygroundApp'));

  // instantiate service
  var playerSplitsStats;
  beforeEach(inject(function (_playerSplitsStats_) {
    playerSplitsStats = _playerSplitsStats_;
  }));

  it('should do something', function () {
    expect(!!playerSplitsStats).toBe(true);
  });

});
