'use strict';

var calculatorPage = function() {

    var calculatorPage = {};

    calculatorPage.firstNumber = element(by.model('first'));
    calculatorPage.secondNumber = element(by.model('second'));
    calculatorPage.goButton = element(by.id('gobutton'));
    calculatorPage.latestResult = element(by.binding('latest'));

    //two locators for operator, one is xpath and other is model
    calculatorPage.selectOperator = element(by.xpath('/html/body/div/div/form/select'));
    // calculatorPage.selectOperator = element(by.model('operator'));
    calculatorPage.divisionOperator = element(by.xpath("//select[@ng-model='operator']//option[@value='DIVISION']"));
    calculatorPage.historyTable = element(by.repeater('result in memory'));
    calculatorPage.timeAndResultInHistoryTable = element.all(by.xpath("//tr[@class='ng-scope']//td[@class='ng-binding']"));
    calculatorPage.defaultZero = element(by.xpath("//h2[contains(text(), '0')]"));
    calculatorPage.superCalculatorHeading = element(by.xpath("//h3[contains(text(), 'Super Calculator')"))

    calculatorPage.getTimeAndResultInHistoryTable = function(){
        return this.timeAndResultInHistoryTable;
    };

    calculatorPage.enterFirstNumber = function(firstnumber) {
        this.firstNumber.sendKeys(firstnumber);
    };

    calculatorPage.enterSecondNumber = function(secondnumber) {
        this.secondNumber.sendKeys(secondnumber);
    };

    calculatorPage.enterFirstAndSecondNumber = function(firstnumber, secondnumber) {
        this.firstNumber.sendKeys(firstnumber);
        this.secondNumber.sendKeys(secondnumber);
    };

    //There are two ways to select a value from a dropdown list
    //firstly, use sendKeys("{text}"). The locator should be the select locator.
    calculatorPage.selectAdditionOperator = function(){
        this.selectOperator.sendKeys("+");
    };
    // use click(). The locator should be the option locator.
    calculatorPage.selectDivisionOperator = function(){
        this.divisionOperator.click();
    };

    calculatorPage.selectModuloOperator = function(){
        this.selectOperator.sendKeys("%");
    };

    calculatorPage.selectMultiplicationOperator = function(){
        this.selectOperator.sendKeys("*");
    };

    calculatorPage.selectSubtractionOperator = function(){
        this.selectOperator.sendKeys("-");
    };

    calculatorPage.clickGoButton = function() {
        this.goButton.click();
    };

    calculatorPage.getLatestResult = function() {
        return this.latestResult.getText();
    };

    calculatorPage.isDefaultZeroDisplayed = function(){
        return this.defaultZero.isDisplayed();
    };

    calculatorPage.isHeadingPresented = function(){
        return browser.wait(function(){
            return browser.isElementPresent(by.xpath("//h3[contains(text(), 'Super Calculator')]"));
        })
    };

    return calculatorPage;
};

module.exports = calculatorPage;