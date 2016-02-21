'use strict';

describe('Service: playerSplits', function () {

  // load the service's module
  beforeEach(module('nbaPlaygroundApp'));

  // instantiate service
  var playerSplits;
  beforeEach(inject(function (_playerSplits_) {
    playerSplits = _playerSplits_;
  }));

  it('should do something', function () {
    expect(!!playerSplits).toBe(true);
  });

});
