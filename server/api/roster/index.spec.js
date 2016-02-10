'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var rosterCtrlStub = {
  index: 'rosterCtrl.index',
  show: 'rosterCtrl.show',
  create: 'rosterCtrl.create',
  update: 'rosterCtrl.update',
  destroy: 'rosterCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var rosterIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './roster.controller': rosterCtrlStub
});

describe('Roster API Router:', function() {

  it('should return an express router instance', function() {
    rosterIndex.should.equal(routerStub);
  });

  describe('GET /api/rosters', function() {

    it('should route to roster.controller.index', function() {
      routerStub.get
        .withArgs('/', 'rosterCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/rosters/:id', function() {

    it('should route to roster.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'rosterCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/rosters', function() {

    it('should route to roster.controller.create', function() {
      routerStub.post
        .withArgs('/', 'rosterCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/rosters/:id', function() {

    it('should route to roster.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'rosterCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/rosters/:id', function() {

    it('should route to roster.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'rosterCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/rosters/:id', function() {

    it('should route to roster.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'rosterCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
