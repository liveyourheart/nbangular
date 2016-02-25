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
  get: sinon.spy()
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

  describe('GET /api/teamSplits/:id', function() {

    it('should route to teamSplit.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'teamSplitCtrl.show')
        .should.have.been.calledOnce;
    });

  });

});
