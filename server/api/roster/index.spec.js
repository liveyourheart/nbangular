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
  get: sinon.spy()
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


  describe('GET /api/rosters/:id', function() {

    it('should route to roster.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'rosterCtrl.show')
        .should.have.been.calledOnce;
    });

  });

});
