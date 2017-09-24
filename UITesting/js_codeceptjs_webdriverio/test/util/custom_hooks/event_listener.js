const event = require('codeceptjs').event;
const output = require('codeceptjs').output;

module.exports = function() {

  event.dispatcher.on(event.test.before, function (test) {
    output.print('*******************************');
    output.print(' just for testing purpose - I am event listener for event.test.before');
    output.print('*******************************');
  });
}
