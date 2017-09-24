const selenium = require('selenium-standalone');

module.exports = function(done) {
  selenium.install({
    baseURL: 'https://selenium-release.storage.googleapis.com',
    version: '3.5.3',
    drivers: {
      chrome: {
        version: '2.32',
        arch: process.arch,
        baseURL: 'https://chromedriver.storage.googleapis.com'
      },
      ie: {
        version: '3.5.1',
        arch: process.arch,
        baseURL: 'https://selenium-release.storage.googleapis.com'
      },
      firefox: {
        version: '0.18.0',
        arch: process.arch,
        baseURL: 'https://github.com/mozilla/geckodriver/releases/download'
      }
    }
}, function (err) {
    if (err) return done(err);
    selenium.start(function (err, child) {
      if (err) return done(err);
      selenium.child = child;
      done();
    });
  })
}
