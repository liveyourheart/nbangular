'use strict';

var app = require('../..');
import request from 'supertest';

var newTeamStat;

describe('TeamStat API:', function() {

  describe('GET /api/teamStats/:id', function() {
    var teamStat;

    beforeEach(function(done) {
      request(app)
        .get('/api/teamStats/' + newTeamStat._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          teamStat = res.body;
          done();
        });
    });

    afterEach(function() {
      teamStat = {};
    });

    it('should respond with the requested teamStat', function() {
      teamStat.name.should.equal('New TeamStat');
      teamStat.info.should.equal('This is the brand new teamStat!!!');
    });

  });
});
