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
    calculatorPage.superCalculatorHeading = element(by.xpath("//h3[contains(text(), 'Super Calculator')]"))

    calculatorPage.getTimeAndResultInHistoryTable = function(){
        return this.timeAndResultInHistoryTable;
    };

    calculatorPage.enterFirstNumber = function(firstnumber) {
        if (this.firstNumber.isDisplayed()){
            this.firstNumber.clear();
            this.firstNumber.sendKeys(firstnumber);
        };
    };

    calculatorPage.enterSecondNumber = function(secondnumber) {
        if(this.secondNumber.isDisplayed()){
            this.secondNumber.clear();
            this.secondNumber.sendKeys(secondnumber);
        }
    };

    calculatorPage.enterFirstAndSecondNumber = function(firstnumber, secondnumber) {
        this.enterFirstNumber(firstnumber);
        this.enterSecondNumber(secondnumber);
    };

    //There are two ways to select a value from a dropdown list
    //firstly, use sendKeys("{text}"). The locator should be the select locator.
    calculatorPage.selectAdditionOperator = function(){
        if (this.selectOperator.isDisplayed()){
            this.selectOperator.sendKeys("+");
        }
    };
    // use click(). The locator should be the option locator.
    calculatorPage.selectDivisionOperator = function(){
        if (this.divisionOperator.isDisplayed()){
            this.divisionOperator.click();
        }
    };

    calculatorPage.selectModuloOperator = function(){
        if (this.selectOperator.isDisplayed()){
            this.selectOperator.sendKeys("%");
        }
    };

    calculatorPage.selectMultiplicationOperator = function(){
        if (this.selectOperator.isDisplayed()){
            this.selectOperator.sendKeys("*");
        }
    };

    calculatorPage.selectSubtractionOperator = function(){
        if (this.selectOperator.isDisplayed()){
            this.selectOperator.sendKeys("-");
        }
    };

    //add Expectation for checking an element is visible and enabled such that you can click it
    calculatorPage.clickGoButton = function() {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(this.goButton), 10000);
        this.goButton.click();
    };

    calculatorPage.getLatestResult = function() {
        if (this.latestResult.isDisplayed()){
            return this.latestResult.getText();
        }
        else {
            browser.wait(this.latestResult, 5000).then(function(){
                return this.latestResult.getText();
            })
        };
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
