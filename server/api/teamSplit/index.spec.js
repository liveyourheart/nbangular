'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var teamSplitCtrlStub = {
  index: 'teamSplitCtrl.index',
  show: 'teamSplitCtrl.show',
  create: 'teamSplitCtrl.create',
  update: 'teamSplitCtrl.update',
  destroy: 'teamSplitCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var teamSplitIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './teamSplit.controller': teamSplitCtrlStub
});

describe('TeamSplit API Router:', function() {

  it('should return an express router instance', function() {
    teamSplitIndex.should.equal(routerStub);
  });

  describe('GET /api/teamSplits', function() {

    it('should route to teamSplit.controller.index', function() {
      routerStub.get
        .withArgs('/', 'teamSplitCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/teamSplits/:id', function() {

    it('should route to teamSplit.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'teamSplitCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/teamSplits', function() {

    it('should route to teamSplit.controller.create', function() {
      routerStub.post
        .withArgs('/', 'teamSplitCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/teamSplits/:id', function() {

    it('should route to teamSplit.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'teamSplitCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/teamSplits/:id', function() {

    it('should route to teamSplit.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'teamSplitCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/teamSplits/:id', function() {

    it('should route to teamSplit.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'teamSplitCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
