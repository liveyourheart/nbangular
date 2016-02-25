'use strict';

var app = require('../..');
import request from 'supertest';

var newPlayer;

describe('Player API:', function() {

  describe('GET /api/players/:id', function() {
    var player, hs, cpi;

    beforeEach(function(done) {
      request(app)
        .get('/api/players/' + 201566)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          player = res.body;
          cpi = res.body.commonPlayerInfo[0];
          done();
        });
    });

    afterEach(function() {
      player = {};
    });

    it('should respond with the requested player', function() {
      player.commonPlayerInfo.should.not.equal(null);
    });

    it('should respond with correct common player info', function() {
      cpi.displayFirstLast.should.equal('Russell Westbrook');
      cpi.school.should.equal('UCLA');
      cpi.country.should.equal('USA');
      cpi.jersey.should.equal('0');
      cpi.position.should.equal('Guard');
      cpi.teamId.should.equal(1610612760);
      cpi.fromYear.should.equal(2008);

    });

  });

});
