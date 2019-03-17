const fs = require('fs');
const path = require('path');
const Mocha = require('mocha');

// Instantiate a Mocha with options
const mocha = new Mocha({
  reporter: 'list'
});

// Use non-default Mocha test directory.
const testDir = 'tests/';

// Add each .js file to the mocha instance
fs.readdirSync(testDir)
  .filter(function(file) {
    // Only keep the .js files
    return path.extname(file) === '.js';
  })
  .forEach(function(file) {
    mocha.addFile(path.join(testDir, file));
  });

// Run the tests.
mocha.run(function(failures) {
  process.exitCode = failures ? 1 : 0; // exit with non-zero status if there were failures
});
