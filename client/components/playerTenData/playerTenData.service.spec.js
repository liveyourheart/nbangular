'use strict';

describe('Service: playerTenData', function () {

  // load the service's module
  beforeEach(module('nbaPlaygroundApp'));

  // instantiate service
  var playerTenData;
  beforeEach(inject(function (_playerTenData_) {
    playerTenData = _playerTenData_;
  }));

  it('should do something', function () {
    expect(!!playerTenData).toBe(true);
  });

});
