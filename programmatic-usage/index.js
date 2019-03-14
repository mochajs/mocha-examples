var Mocha = require('mocha');
var fs = require('fs');
var path = require('path');

// Instantiate a Mocha with options
var mocha = new Mocha({
  reporter: 'list'
});

// specify a non-default directory.
var testDir = 'tests/';

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
