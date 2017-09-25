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

  completeAllTasks : function(){
    I.seeElement(ToDoListLocators.completeAllTasksCheckbox);
    I.checkOption(ToDoListLocators.completeAllTasksCheckbox);
  },

  seeClearCompletedButton : function(){
    I.see(ToDoListLocators.clearCompletedFilterButton);
  },

  clickClearCompleteButton : function(){
    I.click(ToDoListLocators.clearCompletedFilterButton);
  },

  completeFirstTask : function(){
    I.seeElement(ToDoListLocators.firstTaskCheckBox);
    I.checkOption(ToDoListLocators.firstTaskCheckBox);
  },

  seeFirstTaskCheckboxIsChecked : function(){
    I.seeCheckboxIsChecked(ToDoListLocators.firstTaskCheckBox);
  },

  seeSecondTaskCheckboxIsChecked : function(){
    I.seeCheckboxIsChecked(ToDoListLocators.secondTaskCheckBox);
  },

  completeSecondTask : function(){
    I.seeElement(ToDoListLocators.secondTaskCheckBox);
    I.checkOption(ToDoListLocators.secondTaskCheckBox);
  },

  dontSeeSecondTaskCheckboxIsChecked : function(){
    I.dontSeeCheckboxIsChecked(ToDoListLocators.secondTaskCheckBox);
  },

  deleteFirstTask : function(){
    I.moveCursorTo(ToDoListLocators.firstTaskLabel);
    I.seeElement(ToDoListLocators.firstDestoryButton);
    I.click(ToDoListLocators.firstDestoryButton);
  },

  deleteSecondTask : function(){
    I.moveCursorTo(ToDoListLocators.secondTaskLabel);
    I.seeElement(ToDoListLocators.secondDestoryButton);
    I.click(ToDoListLocators.secondDestoryButton);
  },

  displayAllTasks : function(){
    I.see(ToDoListLocators.allFilterLink);
    I.click(ToDoListLocators.allFilterLink);
  },

  displayActiveTasks : function(){
    I.see(ToDoListLocators.activeFilterLink);
    I.click(ToDoListLocators.activeFilterLink);
  },

  displayCompletedTasks : function(){
    I.see(ToDoListLocators.completedFilterLink);
    I.click(ToDoListLocators.completedFilterLink);
  },

  editFirstTask: function(task_text){
    I.doubleClick(ToDoListLocators.firstTaskLabel);
    I.fillField(ToDoListLocators.firstTaskTextField, task_text);
    I.pressKey('Enter');
  }
}
