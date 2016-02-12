'use strict';

var app = require('../..');
import request from 'supertest';

var newPlayerStat;

describe('PlayerStat API:', function() {

  describe('GET /api/playerStats', function() {
    var playerStats;

    beforeEach(function(done) {
      request(app)
        .get('/api/playerStats')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          playerStats = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      playerStats.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/playerStats', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/playerStats')
        .send({
          name: 'New PlayerStat',
          info: 'This is the brand new playerStat!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newPlayerStat = res.body;
          done();
        });
    });

    it('should respond with the newly created playerStat', function() {
      newPlayerStat.name.should.equal('New PlayerStat');
      newPlayerStat.info.should.equal('This is the brand new playerStat!!!');
    });

  });

  describe('GET /api/playerStats/:id', function() {
    var playerStat;

    beforeEach(function(done) {
      request(app)
        .get('/api/playerStats/' + newPlayerStat._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          playerStat = res.body;
          done();
        });
    });

    afterEach(function() {
      playerStat = {};
    });

    it('should respond with the requested playerStat', function() {
      playerStat.name.should.equal('New PlayerStat');
      playerStat.info.should.equal('This is the brand new playerStat!!!');
    });

  });

  describe('PUT /api/playerStats/:id', function() {
    var updatedPlayerStat;

    beforeEach(function(done) {
      request(app)
        .put('/api/playerStats/' + newPlayerStat._id)
        .send({
          name: 'Updated PlayerStat',
          info: 'This is the updated playerStat!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedPlayerStat = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPlayerStat = {};
    });

    it('should respond with the updated playerStat', function() {
      updatedPlayerStat.name.should.equal('Updated PlayerStat');
      updatedPlayerStat.info.should.equal('This is the updated playerStat!!!');
    });

  });

  describe('DELETE /api/playerStats/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/playerStats/' + newPlayerStat._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when playerStat does not exist', function(done) {
      request(app)
        .delete('/api/playerStats/' + newPlayerStat._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
