'use strict';
// in this file you can append custom step methods to 'I' object
const toDoListStep = require('./steps/ToDoList.step.js');

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.

    addToDoTask : function(task_text){
      toDoListStep.addToDoTask(task_text);
    },

    navigateToDoListPage : function(){
      toDoListStep.navigateToDoListPage();
    },

    navigateToDoListPageAndAddToDoTask: function(task_text){
      toDoListStep.navigateToDoListPageAndAddToDoTask(task_text);
    },

    completeFirstTask: function(){
      toDoListStep.completeFirstTask();
    },

    completeAllTasks: function(){
      toDoListStep.completeAllTasks();
    },

    seeClearCompletedButton: function(){
      toDoListStep.seeClearCompletedButton();
    },

    seeAndClickClearCompletedButton: function(){
      toDoListStep.seeAndClickClearCompletedButton();
    },

    deleteFirstTask: function(){
      toDoListStep.deleteFirstTask();
    },

    deleteSecondTask: function(){
      toDoListStep.deleteSecondTask();
    },

    displayAllTasks: function(){
      toDoListStep.displayAllTasks();
    },

    displayActiveTasks: function(){
      toDoListStep.displayActiveTasks();
    },

    displayCompletedTasks: function(){
      toDoListStep.displayCompletedTasks();
    },

    seeFirstTaskCheckboxIsChecked: function(){
      toDoListStep.seeFirstTaskCheckboxIsChecked();
    },

    seeSecondTaskCheckboxIsChecked: function(){
      toDoListStep.seeSecondTaskCheckboxIsChecked();
    },

    dontSeeSecondTaskCheckboxIsChecked: function(){
      toDoListStep.dontSeeSecondTaskCheckboxIsChecked();
    },

    displayAllTasks: function(){
      toDoListStep.displayAllTasks();
    },

    displayActiveTasks: function(){
      toDoListStep.displayActiveTasks();
    },

    displayCompletedTasks: function(){
      toDoListStep.displayCompletedTasks();
    },

    editFirstTask: function(task_text){
      toDoListStep.editFirstTask(task_text);
    }

  });
}
