'use strict';

var app = require('../..');
import request from 'supertest';

var newRoster;

describe('Roster API:', function() {

  describe('GET /api/rosters', function() {
    var rosters;

    beforeEach(function(done) {
      request(app)
        .get('/api/rosters')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          rosters = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      rosters.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/rosters', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/rosters')
        .send({
          name: 'New Roster',
          info: 'This is the brand new roster!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newRoster = res.body;
          done();
        });
    });

    it('should respond with the newly created roster', function() {
      newRoster.name.should.equal('New Roster');
      newRoster.info.should.equal('This is the brand new roster!!!');
    });

  });

  describe('GET /api/rosters/:id', function() {
    var roster;

    beforeEach(function(done) {
      request(app)
        .get('/api/rosters/' + newRoster._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          roster = res.body;
          done();
        });
    });

    afterEach(function() {
      roster = {};
    });

    it('should respond with the requested roster', function() {
      roster.name.should.equal('New Roster');
      roster.info.should.equal('This is the brand new roster!!!');
    });

  });

  describe('PUT /api/rosters/:id', function() {
    var updatedRoster;

    beforeEach(function(done) {
      request(app)
        .put('/api/rosters/' + newRoster._id)
        .send({
          name: 'Updated Roster',
          info: 'This is the updated roster!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedRoster = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedRoster = {};
    });

    it('should respond with the updated roster', function() {
      updatedRoster.name.should.equal('Updated Roster');
      updatedRoster.info.should.equal('This is the updated roster!!!');
    });

  });

  describe('DELETE /api/rosters/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/rosters/' + newRoster._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when roster does not exist', function(done) {
      request(app)
        .delete('/api/rosters/' + newRoster._id)
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
