module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    port: 9876,
    files: [
      'test/test.*.js'
    ],
    browsers: ['ChromeHeadless', 'FirefoxHeadless'],
    client: {
      mocha: {
        reporter: 'html', // Use HTML reporter on Karma's debug.html
        timeout: 4000
      }
    }
  });
};
