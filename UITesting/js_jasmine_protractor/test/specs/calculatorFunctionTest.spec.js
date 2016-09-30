var calculatorPageHandler = require('../pagehandler/calculatorPageHandler.js')();
var calculatorPageData = require('../data/calculatorPageData.json');
var calculatorPageNavigator = require('../navigator/calculatorPageNavigator.js')();

describe('calculator function test', function() {

    beforeEach(function () {
        browser.get(browser.baseUrl);
    });

    afterEach(function () {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
    });

    it('should have a title', function () {
        expect(calculatorPageHandler.getPageTitle()).toEqual(calculatorPageData.title);
        console.log('calculator page is OK');
    });

    it('Verify addition with  1 + (-10) = -9', function () {
        var latestResult = calculatorPageNavigator.getLatestAdditionResult(calculatorPageData.firstnumber_addition, calculatorPageData.secondnumber_addition_negative);   
        expect(latestResult).toEqual(calculatorPageData.result_addition_negative);
    });

    it('Verify addition with  345.345 + 123.123 = 468', function () {
        var latestResult = calculatorPageNavigator.getLatestAdditionResult(calculatorPageData.firstdecimalnumber_addition, calculatorPageData.secondecimaldnumber_addition);   
        expect(latestResult).toEqual(calculatorPageData.decimalresult_addition);
    });

    it('Verify division error with 10 / 0 = Infinity', function () {
        var latestResult = calculatorPageNavigator.getLatestDivisionResult(calculatorPageData.firstnumber_division, "0");   
        expect(latestResult).toEqual("Infinity");
    });

    it('Verify division with 897 / 7 = 128.14285714285714', function () {
        var latestResult = calculatorPageNavigator.getLatestDivisionResult(calculatorPageData.firstnumber_division_decimal, calculatorPageData.secondnumber_division_decimal);   
        expect(latestResult).toEqual(calculatorPageData.result_division_decimal);
    });

    it('Verify multiplication with 999999999999 * 999999999999 = 9.99999999998e+23', function () {
        var latestResult = calculatorPageNavigator.getLatestMultiplicationResult(calculatorPageData.maximumnumber, calculatorPageData.maximumnumber);   
        expect(latestResult).toEqual(calculatorPageData.powerresult);
    });

});
