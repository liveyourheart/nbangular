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
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
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

  describe('GET /api/teamStats', function() {

    it('should route to teamStat.controller.index', function() {
      routerStub.get
        .withArgs('/', 'teamStatCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/teamStats/:id', function() {

    it('should route to teamStat.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'teamStatCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/teamStats', function() {

    it('should route to teamStat.controller.create', function() {
      routerStub.post
        .withArgs('/', 'teamStatCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/teamStats/:id', function() {

    it('should route to teamStat.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'teamStatCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/teamStats/:id', function() {

    it('should route to teamStat.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'teamStatCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/teamStats/:id', function() {

    it('should route to teamStat.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'teamStatCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
