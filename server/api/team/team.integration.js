'use strict';

var app = require('../..');
import request from 'supertest';

var newTeam;

describe('Team API:', function() {

  describe('GET /api/teams', function() {
    var teams;

    beforeEach(function(done) {
      request(app)
        .get('/api/teams')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          teams = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      teams.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/teams', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/teams')
        .send({
          teamID: 123456,
          abbreviation: "OKC",
          teamName: "Oklahoma City Thunder",
          simpleName: "Thunder",
          location: "Oklahoma City, OK"
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newTeam = res.body;
          done();
        });
    });

    it('should respond with the newly created team', function() {
      newTeam.teamID.should.equal(123456);
      newTeam.teamName.should.equal('Oklahoma City Thunder');
      newTeam.abbreviation.should.equal('OKC');
      newTeam.simpleName.should.equal('Thunder');
      newTeam.location.should.equal('Oklahoma City, OK');
    });

  });

  describe('GET /api/teams/:id', function() {
    var team;

    beforeEach(function(done) {
      request(app)
        .get('/api/teams/' + newTeam._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          team = res.body;
          done();
        });
    });

    afterEach(function() {
      team = {};
    });

    it('should respond with the requested team', function() {
      team.teamID.should.equal(123456);
      team.teamName.should.equal('Oklahoma City Thunder');
      team.abbreviation.should.equal('OKC');
      team.simpleName.should.equal('Thunder');
      team.location.should.equal('Oklahoma City, OK');
    });

  });

  describe('PUT /api/teams/:id', function() {
    var updatedTeam;

    beforeEach(function(done) {
      request(app)
        .put('/api/teams/' + newTeam._id)
        .send({
          teamName: 'Updated Team',
          location: 'This is the updated team!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedTeam = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedTeam = {};
    });

    it('should respond with the updated team', function() {
      updatedTeam.teamName.should.equal('Updated Team');
      updatedTeam.location.should.equal('This is the updated team!!!');
    });

  });

  describe('DELETE /api/teams/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/teams/' + newTeam._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when team does not exist', function(done) {
      request(app)
        .delete('/api/teams/' + newTeam._id)
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
