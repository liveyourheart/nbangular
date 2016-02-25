'use strict';

var app = require('../..');
import request from 'supertest';

var newTeamSplit;

describe('TeamSplit API:', function() {

  describe('GET /api/teamSplits/:id', function() {
    var teamSplit;

    beforeEach(function(done) {
      request(app)
        .get('/api/teamSplits/' + 1610612760)
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

    it('should respond with the requested Team dashboard', function() {
      teamSplit.should.not.equal(null);

    });

    it('should respond with the requested Overall Team Split Stats', function() {
      teamSplit.overallTeamDashboard.should.not.equal(null);
      teamSplit.overallTeamDashboard[0].groupSet.should.equal('Overall');
      teamSplit.overallTeamDashboard[0].gp.should.not.equal(null);

    });

    it('should respond with the requested Home/Road Team Split Stats', function() {
      teamSplit.locationTeamDashboard.should.not.equal(null);
      teamSplit.locationTeamDashboard[0].groupSet.should.equal('Location');
      teamSplit.locationTeamDashboard[0].groupValue.should.equal('Home');
      teamSplit.locationTeamDashboard[0].gp.should.not.equal(null);
      teamSplit.locationTeamDashboard[1].groupSet.should.equal('Location');
      teamSplit.locationTeamDashboard[1].groupValue.should.equal('Road');
    });

    it('should respond with the requested Wins/Losses Team Split Stats', function() {
      teamSplit.winsLossesTeamDashboard.should.not.equal(null);
      teamSplit.winsLossesTeamDashboard[0].groupSet.should.equal('Wins/Losses');
      teamSplit.winsLossesTeamDashboard[0].groupValue.should.equal('Wins');
      teamSplit.winsLossesTeamDashboard[0].gp.should.not.equal(null);
      teamSplit.winsLossesTeamDashboard[1].groupSet.should.equal('Wins/Losses');
      teamSplit.winsLossesTeamDashboard[1].groupValue.should.equal('Losses');
    });

    it('should respond with the requested Monthly Team Split Stats', function() {
      teamSplit.monthTeamDashboard.should.not.equal(null);
      teamSplit.monthTeamDashboard[0].groupSet.should.equal('Month');
      teamSplit.monthTeamDashboard[0].groupValue.should.equal('October');
      teamSplit.monthTeamDashboard[0].gp.should.not.equal(null);
      teamSplit.monthTeamDashboard[1].groupSet.should.equal('Month');
      teamSplit.monthTeamDashboard[1].groupValue.should.equal('November');
      teamSplit.monthTeamDashboard[2].groupSet.should.equal('Month');
      teamSplit.monthTeamDashboard[2].groupValue.should.equal('December');
      teamSplit.monthTeamDashboard[3].groupSet.should.equal('Month');
      teamSplit.monthTeamDashboard[3].groupValue.should.equal('January');
      teamSplit.monthTeamDashboard[4].groupSet.should.equal('Month');
      teamSplit.monthTeamDashboard[4].groupValue.should.equal('February');
    });

    it('should respond with the requested Days Rest Team Split Stats', function() {
      teamSplit.daysRestTeamDashboard.should.not.equal(null);
      teamSplit.daysRestTeamDashboard[0].groupSet.should.equal('Days Rest');
      teamSplit.daysRestTeamDashboard[0].gp.should.not.equal(null);
      teamSplit.daysRestTeamDashboard[0].groupValue.should.equal('0 Days Rest');
      teamSplit.daysRestTeamDashboard[1].groupSet.should.equal('Days Rest');
      teamSplit.daysRestTeamDashboard[1].groupValue.should.equal('1 Days Rest');
      teamSplit.daysRestTeamDashboard[2].groupSet.should.equal('Days Rest');
      teamSplit.daysRestTeamDashboard[2].groupValue.should.equal('2 Days Rest');
    });

  });

});
