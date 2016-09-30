var calculatorPageHandler = require('../pagehandler/calculatorPageHandler.js')();
var calculatorPageData = require('../data/calculatorPageData.json');
var calculatorPageNavigator = require('../navigator/calculatorPageNavigator.js')();

describe('calculator smoke test', function() {

    beforeEach(function () {
        browser.get(browser.baseUrl);
    });

    afterEach(function () {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
    });

    it('page loaded and should have a title', function () {
        expect(calculatorPageHandler.isPageLoaded()).toBe(true);
        expect(calculatorPageHandler.getPageTitle()).toEqual(calculatorPageData.title);
        console.log('calculator page is OK');
    });

    it('Verify addition with 1 + 1 = 2', function () {
        var latestResult = calculatorPageNavigator.getLatestAdditionResult(calculatorPageData.firstnumber_addition, calculatorPageData.secondnumber_addition);   
        expect(latestResult).toEqual(calculatorPageData.result_addition);
    });

    it('Verify division with 10 / 2 = 5', function () {
        var latestResult = calculatorPageNavigator.getLatestDivisionResult(calculatorPageData.firstnumber_division, calculatorPageData.secondnumber_division);   
        expect(latestResult).toEqual(calculatorPageData.result_division);
    });

    it('Verify modulo with 10 % 3 = 1', function () {
        var latestResult = calculatorPageNavigator.getLatestModuloResult(calculatorPageData.firstnumber_modulo, calculatorPageData.secondnumber_modulo);   
        expect(latestResult).toEqual(calculatorPageData.result_modulo);
    });

    it('Verify multiplication with 10 * 8 = 80', function () {
        var latestResult = calculatorPageNavigator.getLatestMultiplicationResult(calculatorPageData.firstnumber_multiplication, calculatorPageData.secondnumber_multiplication);   
        expect(latestResult).toEqual(calculatorPageData.result_multiplication);
    });

    it('Verify subtraction with 9 - 3 = 6', function () {
        var latestResult = calculatorPageNavigator.getLatestSubtractionResult(calculatorPageData.firstnumber_subtraction, calculatorPageData.secondnumber_subtraction);   
        expect(latestResult).toEqual(calculatorPageData.result_subtraction);
    });

});
