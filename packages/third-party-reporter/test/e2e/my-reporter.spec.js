const { deepEqual } = require('assert');
const { 
  EVENT_TEST_PASS, 
  EVENT_TEST_FAIL, 
  EVENT_TEST_END 
} = require('mocha').Runner.constants;
const MyReporter = require('../../lib/my-reporter');

const pendingTest = {
  name: 'pending',
  slow: () => '',
  fullTitle: () => 'pending test title',
};
const failTest = {
  name: 'fail',
  slow: () => '',
  fullTitle: () => 'fail test title',
};
const passTest = {
  name: 'pass',
  slow: () => '',
  fullTitle: () => 'pass test title',
};

const expectedEndMessage = {
  msg: 'end: %d/%d',
  substr1: 1,
  substr2: 2
}
const expectedPassMessage = {
  msg: 'pass: %s',
  substr1: 'pass test title'
}
const expectedFailMessage = {
  msg: 'fail: %s -- error: %s',
  substr1: 'fail test title',
  substr2: 'error message'
}

describe('My Reporter e2e tests', () => {
  let stdout;
  let savedConsoleLog;
  let runner;

  beforeEach(() => {
    runner = {};
    stdout = [];
  })

  describe('On test pass', () => {
    it('should print expected pass message', () => {
      savedConsoleLog = console.log;
      console.log = function(msg, substr1) {
        stdout.push({msg, substr1});
      }
      runner.on = function(event, callback) {
        if (event === EVENT_TEST_PASS) {
          callback(passTest);
        }
      };
      MyReporter.call({}, runner);
      console.log = savedConsoleLog;

      deepEqual(stdout[0], expectedPassMessage);
    });
  });

  describe('On test failure', () => {
    it('should print expected fail message and error message', () => {
      savedConsoleLog = console.log;
      console.log = function(msg, substr1, substr2) {
        stdout.push({msg, substr1, substr2});
      }
      runner.on = function(event, callback) {
        if (event === EVENT_TEST_FAIL) {
          callback(failTest, { message: 'error message' });
        }
      };

      MyReporter.call({}, runner);
      console.log = savedConsoleLog;

      deepEqual(stdout[0], expectedFailMessage);
    });
  });

  describe('On end of suite', () => {
    it('should print expected end message with stats for tests and passes', () => {
      savedConsoleLog = console.log;
      console.log = function(msg, substr1, substr2) {
        stdout.push({msg, substr1, substr2});
      }
      runner.on = function(event, callback) {
        if (event === EVENT_TEST_END) {
          callback();
        }
      };
      runner.stats = {
        passes: 1,
        tests: 2
      }

      MyReporter.call({}, runner);
      console.log = savedConsoleLog;

      deepEqual(stdout[0], expectedEndMessage);
    });
  });
});
