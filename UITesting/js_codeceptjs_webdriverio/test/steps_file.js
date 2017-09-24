'use strict';
// in this file you can append custom step methods to 'I' object
const toDoListStep = require('./steps/ToDoList.step.js');

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.

    addToDoTask : function(task_text){
      toDoListStep.addToDoTask(task_text);
    },

    addAnotherToDoTask : function(task_text){
      toDoListStep.addAnotherToDoTask(task_text);
    }

  });
}
