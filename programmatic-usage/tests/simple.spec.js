const { equal } = require("assert");
const index = require('../src');

describe('Programmatic usage suite', function() {
  it('should equal true', function() {
    equal(true, true);
  });
  describe('#index', function() {
    it('should return expected string', function() {
        equal(index(), "programmatic example");
    });
  });
});
