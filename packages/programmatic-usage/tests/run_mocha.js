const fs = require('fs');
const path = require('path');

async function run() {
  const { default: Mocha } = require('mocha');
  const mocha = new Mocha({
    reporter: 'list'
  });

  const testDir = process.env.TEST_DIR;

  fs.readdirSync(testDir)
    .filter(function(file) {
      return path.extname(file) === '.js' && file !== path.basename(__filename);
    })
    .forEach(function(file) {
      mocha.addFile(path.join(testDir, file));
    });

  mocha.run(function(failures) {
    process.exitCode = failures ? 1 : 0;
  });
}

run().catch(function(error) {
  console.error(error);
  process.exitCode = 1;
});
