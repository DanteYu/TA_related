exports.config = require('./browser.conf.js');

exports.config.specs = [
    '../specs/calculatorSmokeTest.spec.js',
    '../specs/calculatorFunctionTest.spec.js',
    '../specs/calculatorHistoryTableTest.spec.js'
];

// exports.config.specs = [
//     '../specs/calculator*Test.spec.js'
// ];