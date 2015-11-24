"use strict";
let should = require('should');
let bear = require('../models/bear');

describe('Bear Database', function() {
  describe('Initial Seed', function() {
    it('Should start with 3 bears', function(done) {
      let bears = bear.getAllBears();
      should.equal(bears.length, 3);
      done();
    });
  });
  describe('Creating a bear sync', function() {
    it('should return false - missing bear name', function(done) {
      let result = bear.createSync(null, 'Brown', 'Grizzly');
      should.equal(result, false);
      done();
    });
    it('should create a new bear from an object', function(done) {
      let result = bear.createSync({ name: 'Pan', color: 'Black and White', species: 'Panda'});
      should.equal(result, undefined);
      let bears = bear.getAllBears();
      should.equal(bears.length, 4);
      let created_bear = bears[bears.length - 1];
      should.exist(created_bear._id);
      should.equal(created_bear.name, 'Pan');
      should.equal(created_bear.color, 'Black and White');
      should.equal(created_bear.species, 'Panda');
      done();
    });
  });
});
