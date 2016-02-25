'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var teamStatCtrlStub = {
  index: 'teamStatCtrl.index',
  show: 'teamStatCtrl.show',
  create: 'teamStatCtrl.create',
  update: 'teamStatCtrl.update',
  destroy: 'teamStatCtrl.destroy'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var teamStatIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './teamStat.controller': teamStatCtrlStub
});

describe('TeamStat API Router:', function() {

  it('should return an express router instance', function() {
    teamStatIndex.should.equal(routerStub);
  });

  describe('GET /api/teamStats/:id', function() {

    it('should route to teamStat.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'teamStatCtrl.show')
        .should.have.been.calledOnce;
    });

  });

});
