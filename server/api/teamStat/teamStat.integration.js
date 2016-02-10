'use strict';

var app = require('../..');
import request from 'supertest';

var newTeamStat;

describe('TeamStat API:', function() {

  describe('GET /api/teamStats', function() {
    var teamStats;

    beforeEach(function(done) {
      request(app)
        .get('/api/teamStats')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          teamStats = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      teamStats.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/teamStats', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/teamStats')
        .send({
          name: 'New TeamStat',
          info: 'This is the brand new teamStat!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newTeamStat = res.body;
          done();
        });
    });

    it('should respond with the newly created teamStat', function() {
      newTeamStat.name.should.equal('New TeamStat');
      newTeamStat.info.should.equal('This is the brand new teamStat!!!');
    });

  });

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

  describe('PUT /api/teamStats/:id', function() {
    var updatedTeamStat;

    beforeEach(function(done) {
      request(app)
        .put('/api/teamStats/' + newTeamStat._id)
        .send({
          name: 'Updated TeamStat',
          info: 'This is the updated teamStat!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedTeamStat = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedTeamStat = {};
    });

    it('should respond with the updated teamStat', function() {
      updatedTeamStat.name.should.equal('Updated TeamStat');
      updatedTeamStat.info.should.equal('This is the updated teamStat!!!');
    });

  });

  describe('DELETE /api/teamStats/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/teamStats/' + newTeamStat._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when teamStat does not exist', function(done) {
      request(app)
        .delete('/api/teamStats/' + newTeamStat._id)
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
