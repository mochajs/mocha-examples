import { equal } from "assert";
import index from './';

describe('Typescript usage suite', () => {
  it('should be able to execute a test', function() {
    equal(true, true);
  });
  it('should return expected string', function() {
    equal(index('incoming'), "incoming-static")
  });
});
