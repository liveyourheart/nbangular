'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var playerStatCtrlStub = {
  index: 'playerStatCtrl.index',
  show: 'playerStatCtrl.show',
  create: 'playerStatCtrl.create',
  update: 'playerStatCtrl.update',
  destroy: 'playerStatCtrl.destroy'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var playerStatIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './playerStat.controller': playerStatCtrlStub
});

describe('PlayerStat API Router:', function() {

  it('should return an express router instance', function() {
    playerStatIndex.should.equal(routerStub);
  });

  describe('GET /api/playerStats/:id', function() {

    it('should route to playerStat.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'playerStatCtrl.show')
        .should.have.been.calledOnce;
    });

  });

});
