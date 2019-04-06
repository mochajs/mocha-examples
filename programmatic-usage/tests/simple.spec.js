const { equal } = require("assert");
const index = require('../lib');

describe('Programmatic usage suite', function() {
  describe('#index', function() {
    it('should return expected string', function() {
        equal(index(), "programmatic example");
    });
  });
});
