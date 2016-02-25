'use strict';

var app = require('../..');
import request from 'supertest';

var newTeamSplit;

describe('TeamSplit API:', function() {

  describe('GET /api/teamSplits/:id', function() {
    var teamSplit;

    beforeEach(function(done) {
      request(app)
        .get('/api/teamSplits/' + newTeamSplit._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          teamSplit = res.body;
          done();
        });
    });

    afterEach(function() {
      teamSplit = {};
    });

    it('should respond with the requested teamSplit', function() {
      teamSplit.name.should.equal('New TeamSplit');
      teamSplit.info.should.equal('This is the brand new teamSplit!!!');
    });

  });

});
