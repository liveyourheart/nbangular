'use strict';

var app = require('../..');
import request from 'supertest';

var newRoster;

describe('Roster API:', function() {

  describe('GET /api/rosters/:id', function() {
    var roster;

    beforeEach(function(done) {
      request(app)
        .get('/api/rosters/' + newRoster._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          roster = res.body;
          done();
        });
    });

    afterEach(function() {
      roster = {};
    });

    it('should respond with the requested roster', function() {
      roster.name.should.equal('New Roster');
      roster.info.should.equal('This is the brand new roster!!!');
    });

  });

});
