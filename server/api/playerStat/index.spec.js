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
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
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

  describe('GET /api/playerStats', function() {

    it('should route to playerStat.controller.index', function() {
      routerStub.get
        .withArgs('/', 'playerStatCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/playerStats/:id', function() {

    it('should route to playerStat.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'playerStatCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/playerStats', function() {

    it('should route to playerStat.controller.create', function() {
      routerStub.post
        .withArgs('/', 'playerStatCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/playerStats/:id', function() {

    it('should route to playerStat.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'playerStatCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/playerStats/:id', function() {

    it('should route to playerStat.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'playerStatCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/playerStats/:id', function() {

    it('should route to playerStat.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'playerStatCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
