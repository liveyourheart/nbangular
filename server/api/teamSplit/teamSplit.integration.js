'use strict';

var app = require('../..');
import request from 'supertest';

var newTeamSplit;

describe('TeamSplit API:', function() {

  describe('GET /api/teamSplits', function() {
    var teamSplits;

    beforeEach(function(done) {
      request(app)
        .get('/api/teamSplits')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          teamSplits = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      teamSplits.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/teamSplits', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/teamSplits')
        .send({
          name: 'New TeamSplit',
          info: 'This is the brand new teamSplit!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newTeamSplit = res.body;
          done();
        });
    });

    it('should respond with the newly created teamSplit', function() {
      newTeamSplit.name.should.equal('New TeamSplit');
      newTeamSplit.info.should.equal('This is the brand new teamSplit!!!');
    });

  });

  describe('GET /api/teamSplits/:id', function() {
    var teamSplit;

    beforeEach(function(done) {
      request(app)
        .get('/api/teamSplits/' + newTeamSplit._id)
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

    it('should respond with the requested teamSplit', function() {
      teamSplit.name.should.equal('New TeamSplit');
      teamSplit.info.should.equal('This is the brand new teamSplit!!!');
    });

  });

  describe('PUT /api/teamSplits/:id', function() {
    var updatedTeamSplit;

    beforeEach(function(done) {
      request(app)
        .put('/api/teamSplits/' + newTeamSplit._id)
        .send({
          name: 'Updated TeamSplit',
          info: 'This is the updated teamSplit!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedTeamSplit = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedTeamSplit = {};
    });

    it('should respond with the updated teamSplit', function() {
      updatedTeamSplit.name.should.equal('Updated TeamSplit');
      updatedTeamSplit.info.should.equal('This is the updated teamSplit!!!');
    });

  });

  describe('DELETE /api/teamSplits/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/teamSplits/' + newTeamSplit._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when teamSplit does not exist', function(done) {
      request(app)
        .delete('/api/teamSplits/' + newTeamSplit._id)
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
