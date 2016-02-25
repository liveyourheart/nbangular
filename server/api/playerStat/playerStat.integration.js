'use strict';

var app = require('../..');
import request from 'supertest';

var newPlayerStat;

describe('PlayerStat API:', function() {

  describe('GET /api/playerStats/:id', function() {
    var playerStat, gameLogs;

    beforeEach(function(done) {
      request(app)
        .get('/api/playerStats/' + 201566)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          playerStat = res.body;
          gameLogs = res.body.gameLogs;
          done();
        });
    });

    afterEach(function() {
      playerStat = {};
    });

    it('should respond with the requested playerStat', function() {
      playerStat.overviewCareerAvg.should.not.equal(null);
      playerStat.overviewCareerHigh.should.not.equal(null);
      playerStat.overviewCareerTotal.should.not.equal(null);
      playerStat.overviewSeasonAvg.should.not.equal(null);
      playerStat.overviewSeasonHigh.should.not.equal(null);

    });

    it('should respond with Game Logs for last 10 games', function(){
      gameLogs.should.not.equal(null);
      gameLogs.length.should.equal(10);
    });

  });

});
