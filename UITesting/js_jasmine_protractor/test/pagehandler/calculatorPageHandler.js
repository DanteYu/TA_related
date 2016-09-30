'use strict';

var calculatorPage = require("../pages/calculatorPage.po.js")();

var calculatorPageHandler = function() {

    var calculatorPageHandler = {};

    calculatorPageHandler.getLatestAdditionResult = function (firstnumber, secondnumber) {
        calculatorPage.enterFirstAndSecondNumber(firstnumber, secondnumber);
        calculatorPage.clickGoButton();
        return calculatorPage.getLatestResult();
    };

    calculatorPageHandler.getLatestDivistionResult = function (firstnumber, secondnumber) {
        calculatorPage.enterFirstAndSecondNumber(firstnumber, secondnumber);
        calculatorPage.selectDivisionOperator();
        calculatorPage.clickGoButton();
        return calculatorPage.getLatestResult();
    };

    calculatorPageHandler.getLatestModuloResult = function (firstnumber, secondnumber) {
        calculatorPage.enterFirstAndSecondNumber(firstnumber, secondnumber);
        calculatorPage.selectModuloOperator();
        calculatorPage.clickGoButton();
        return calculatorPage.getLatestResult();
    };

    calculatorPageHandler.getLatestMultiplicationResult = function (firstnumber, secondnumber) {
        calculatorPage.enterFirstAndSecondNumber(firstnumber, secondnumber);
        calculatorPage.selectMultiplicationOperator();
        calculatorPage.clickGoButton();
        return calculatorPage.getLatestResult();
    };

    calculatorPageHandler.getLatestSubtractionResult = function (firstnumber, secondnumber) {
        calculatorPage.enterFirstAndSecondNumber(firstnumber, secondnumber);
        calculatorPage.selectSubtractionOperator();
        calculatorPage.clickGoButton();
        return calculatorPage.getLatestResult();
    };

    calculatorPageHandler.getTimeAndResultInHistoryTable = function(){
        return calculatorPage.getTimeAndResultInHistoryTable();
    };

    calculatorPageHandler.getPageTitle = function(){
        return browser.getTitle();
    };

    calculatorPageHandler.isPageLoaded = function(){
        return browser.wait(function(){
            return calculatorPage.isHeadingPresented() && calculatorPage.isDefaultZeroDisplayed();
        })
    };

    return calculatorPageHandler;
};

module.exports = calculatorPageHandler;
