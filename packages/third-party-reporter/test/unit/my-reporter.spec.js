const { equal } = require('assert');

describe('Third party reporter usage', () => {
  it('should equal true', () => {
    equal(true, true);
  });

  it('should fail', () => {
    equal(true, false);
  })
});
