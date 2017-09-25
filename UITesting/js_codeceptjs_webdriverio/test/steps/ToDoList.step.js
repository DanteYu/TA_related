
'use strict';

let I, mainPage, toDoListPage;

const mainPageUrl = '/';

module.exports = {

  _init() {
    I = require('../steps_file.js')();
    mainPage = require('../pages/MainPage.po.js');
    mainPage._init();
    toDoListPage = require('../pages/ToDoListPage.po.js');
    toDoListPage._init();
  },

  // insert your locators and methods here

  navigateToDoListPage: function(){
    mainPage.clickVueJSLink();
    // I.wait(10);
    // I.refreshPage();
  },

  addToDoTask: function(task_text){
    toDoListPage.enterTask(task_text);
  },

  navigateToDoListPageAndAddToDoTask: function(task_text){
    this.navigateToDoListPage();
    this.addToDoTask(task_text);
  },

  completeFirstTask: function(){
    toDoListPage.completeFirstTask();
  },

  completeAllTasks: function(){
    toDoListPage.completeAllTasks();
  },

  seeClearCompletedButton: function(){
    toDoListPage.seeClearCompletedButton();
  },

  seeAndClickClearCompletedButton: function(){
    toDoListPage.seeClearCompletedButton();
    toDoListPage.clickClearCompleteButton();
  },

  deleteFirstTask: function(){
    toDoListPage.deleteFirstTask();
  },

  deleteSecondTask: function(){
    toDoListPage.deleteSecondTask();
  },

  displayAllTasks: function(){
    toDoListPage.displayAllTasks();
  },

  displayActiveTasks: function(){
    toDoListPage.displayActiveTasks();
  },

  displayCompletedTasks: function(){
    toDoListPage.displayCompletedTasks();
  },

  seeFirstTaskCheckboxIsChecked: function(){
    toDoListPage.seeFirstTaskCheckboxIsChecked();
  },

  seeSecondTaskCheckboxIsChecked: function(){
    toDoListPage.seeSecondTaskCheckboxIsChecked();
  },

  dontSeeSecondTaskCheckboxIsChecked: function(){
    toDoListPage.dontSeeSecondTaskCheckboxIsChecked();
  },

  editFirstTask: function(task_text){
    toDoListPage.editFirstTask(task_text);
  }

}
