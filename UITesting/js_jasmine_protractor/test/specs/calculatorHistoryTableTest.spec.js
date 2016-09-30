var calculatorPageHandler = require('../pagehandler/calculatorPageHandler.js')();
var calculatorPageData = require('../data/calculatorPageData.json');
var calculatorPageNavigator = require('../navigator/calculatorPageNavigator.js')();

describe('calculator hisotry table test', function() {

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


    it('Verify history table contains all results of five calculations', function(){

        var latestResult1 = calculatorPageNavigator.getLatestAdditionResult(calculatorPageData.firstnumber_addition, calculatorPageData.secondnumber_addition);   
        expect(latestResult1).toEqual(calculatorPageData.result_addition);
        var latestResult2 = calculatorPageNavigator.getLatestDivisionResult(calculatorPageData.firstnumber_division, calculatorPageData.secondnumber_division);   
        expect(latestResult2).toEqual(calculatorPageData.result_division);
        var latestResult3 = calculatorPageNavigator.getLatestModuloResult(calculatorPageData.firstnumber_modulo, calculatorPageData.secondnumber_modulo);   
        expect(latestResult3).toEqual(calculatorPageData.result_modulo);
        var latestResult4 = calculatorPageNavigator.getLatestMultiplicationResult(calculatorPageData.firstnumber_multiplication, calculatorPageData.secondnumber_multiplication);   
        expect(latestResult4).toEqual(calculatorPageData.result_multiplication);
        var latestResult5 = calculatorPageNavigator.getLatestSubtractionResult(calculatorPageData.firstnumber_subtraction, calculatorPageData.secondnumber_subtraction);   
        expect(latestResult5).toEqual(calculatorPageData.result_subtraction);

        calculatorPageNavigator.getTimeAndResultAtHistoryTable().then(function(items){
            expect(items.length / 2).toEqual(5);
            expect(items[1].getText()).toEqual(latestResult5);
            expect(items[3].getText()).toEqual(latestResult4);
            expect(items[5].getText()).toEqual(latestResult3);
            expect(items[7].getText()).toEqual(latestResult2);
            expect(items[9].getText()).toEqual(latestResult1);
        });


    });

})