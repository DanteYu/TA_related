'use strict';

var calculatorPageHandler = require("../pagehandler/calculatorPageHandler.js")();


var calculatorPageNavigator = function() {

    var calculatorPageNavigator = {};

    calculatorPageNavigator.getLatestAdditionResult = function (firstnumber, secondnumber) {
        var latestResult = calculatorPageHandler.getLatestAdditionResult(firstnumber, secondnumber);
        return latestResult;
    };

    calculatorPageNavigator.getLatestDivisionResult = function (firstnumber, secondnumber) {
        var latestResult = calculatorPageHandler.getLatestDivistionResult(firstnumber, secondnumber);
        return latestResult;
    };

    calculatorPageNavigator.getLatestModuloResult = function (firstnumber, secondnumber) {
        var latestResult = calculatorPageHandler.getLatestModuloResult(firstnumber, secondnumber);
        return latestResult;
    };

    calculatorPageNavigator.getLatestMultiplicationResult = function (firstnumber, secondnumber) {
        var latestResult = calculatorPageHandler.getLatestMultiplicationResult(firstnumber, secondnumber);
        return latestResult;
    };

    calculatorPageNavigator.getLatestSubtractionResult = function (firstnumber, secondnumber) {
        var latestResult = calculatorPageHandler.getLatestSubtractionResult(firstnumber, secondnumber);
        return latestResult;
    };
 
    calculatorPageNavigator.getTimeAndResultAtHistoryTable = function(){
    	var timeAndResultArray =calculatorPageHandler.getTimeAndResultInHistoryTable();
    	return timeAndResultArray;
    };


    return calculatorPageNavigator;
};

module.exports = calculatorPageNavigator;