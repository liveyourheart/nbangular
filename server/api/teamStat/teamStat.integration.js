'use strict';

var app = require('../..');
import request from 'supertest';

var newTeamStat;

describe('TeamStat API:', function() {

  describe('GET /api/teamStats/:id', function() {
    var teamStat, ranks, info;

    beforeEach(function(done) {
      request(app)
        .get('/api/teamStats/' + 1610612760)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          teamStat = res.body;
          ranks = res.body.teamSeasonRanks[0];
          info = res.body.teamInfoCommon[0];
          done();
        });
    });

    afterEach(function() {
      teamStat = {};
    });

    it('should respond with the requested teamStat', function() {
      teamStat.should.not.equal(null);
      teamStat.teamSeasonRanks.should.not.equal(null);
      teamStat.teamInfoCommon.should.not.equal(null);
    });

    it('should respond with the requested team season ranks', function() {
      ranks.should.not.equal(null);
      ranks.leagueId.should.equal('00');
      ranks.seasonId.should.equal('22015');
      ranks.teamId.should.equal(1610612760)
    });

    it('should respond with the requested team Info', function() {
      info.should.not.equal(null);
      info.seasonYear.should.equal('2015-16');
      info.teamCity.should.equal('Oklahoma City');
      info.teamName.should.equal('Thunder');
      info.teamAbbreviation.should.equal('OKC');
      info.teamConference.should.equal('West');
      info.teamDivision.should.equal('Northwest');

    });

  });
});
