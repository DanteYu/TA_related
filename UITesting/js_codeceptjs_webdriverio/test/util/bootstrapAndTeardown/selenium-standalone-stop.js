var selenium = require('selenium-standalone');

module.exports = function(done) {
  selenium.child.kill();
  done();
}
