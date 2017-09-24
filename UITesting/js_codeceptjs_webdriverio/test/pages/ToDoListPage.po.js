'use strict';

const ToDoListLocators = require('./locators/ToDoListPage.locators.js');

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },

  // insert your locators and methods here

  enterTask : function(task_text){
    I.seeElement(ToDoListLocators.inputTextField);
    I.fillField(ToDoListLocators.inputTextField, task_text);
    I.pressKey('Enter');
  },

  completeTask : function(){
    I.seeElement(ToDoListLocators.completeAllTasksCheckbox);
    I.checkOption(ToDoListLocators.completeAllTasksCheckbox);
  },

  seeClearCompletedButton : function(){
    I.seeElement(ToDoListLocators.clearCompletedFilterButton);
  },

  clickClearCompleteButton : function(){
    I.click(ToDoListLocators.clearCompletedFilterButton);
  },

  completeFirstTask : function(){
    I.seeElement(ToDoListLocators.firstTaskCheckBox);
    I.checkOption(ToDoListLocators.firstTaskCheckBox);
  },

  completeSecondTask : function(){
    I.seeElement(ToDoListLocators.secondTaskCheckBox);
    I.checkOption(ToDoListLocators.secondTaskCheckBox);
  },

  deleteFirstTask : function(){
    I.seeElement(ToDoListLocators.firstDestoryButton);
    I.check(ToDoListLocators.firstDestoryButton);
  },

  deleteSecondTask : function(){
    I.seeElement(ToDoListLocators.secondDestoryButton);
    I.check(ToDoListLocators.secondDestoryButton);
  },

  displayAllTasks : function(){
    I.seeElement(ToDoListLocators.allFilterLink);
    I.click(ToDoListLocators.allFilterLink);
  },

  displayActiveTasks : function(){
    I.seeElement(ToDoListLocators.allFilterLink);
    I.click(ToDoListLocators.activeFilterLink);
  },

  displayCompletedTasks : function(){
    I.seeElement(ToDoListLocators.allFilterLink);
    I.click(ToDoListLocators.activeFilterLink);
  }

}
