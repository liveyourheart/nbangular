'use strict';

var app = require('../..');
import request from 'supertest';

var newRoster;

describe('Roster API:', function() {

  describe('GET /api/rosters/:id', function() {
    var roster, coaches, players;

    beforeEach(function(done) {
      request(app)
        .get('/api/rosters/' + 1610612760)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          roster = res.body;
          players = res.body.commonTeamRoster;
          coaches = res.body.coaches;
          done();
        });
    });

    afterEach(function() {
      roster = {};
    });

    it('should respond with the requested roster', function() {
      roster.should.not.equal(null);
    });

    it('should respond with thunder head coach billy donovan', function() {
      coaches.should.not.equal(null);
      coaches[0].teamId.should.equal(1610612760);
      coaches[0].coachName.should.equal('Billy Donovan');
      coaches[0].isAssistant.should.equal(1);
      coaches[0].coachType.should.equal('Head Coach');
    });

    it('should respond with thunder point guard Russell Westbrook', function() {
      players.should.not.equal(null);
      players[0].teamID.should.equal(1610612760);
      players[0].player.should.equal('Russell Westbrook');
      players[0].num.should.equal('0');
      players[0].position.should.equal('G');
      players[0].school.should.equal('UCLA');
      players[0].playerId.should.equal(201566);
    });

  });

});
