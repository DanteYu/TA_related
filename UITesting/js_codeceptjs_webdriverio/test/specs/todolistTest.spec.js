'use strict';

const taskdata = require('../testdata/ToDoList.data.js');
const taskset = require('../testdata/taskset.js')();
const output =require('codeceptjs').output;

const mainPageUrl = '/';
const firstTask = taskdata.TaskName.firstTask;
const secondTask = taskdata.TaskName.secondTask;
const newTask = taskdata.TaskName.newTask;

Feature('To Do List Functionality Test Suite');

Background((I) => {
  I.amOnPage(mainPageUrl);
  I.seeTitleEquals('TodoMVC');
});

Scenario('I can add a to-do task', (I) => {
  I.navigateToDoListPage();
  I.see('todos');
  I.addToDoTask(firstTask);
  I.see(firstTask);
});

Data(taskset.tasks).Scenario('I can add multiple to-do tasks', (I, current) => {
  I.navigateToDoListPageAndAddToDoTask(firstTask);
  I.see('todos');
  output.print('I add #' + current.number + ' task');
  I.addToDoTask(current.description);
  I.addToDoTask(current.description);
  I.see(firstTask);
});

Scenario('I can add a to-do task and tick it as completed', (I) => {
  I.navigateToDoListPage();
  I.see('todos');

  I.addToDoTask(firstTask);
  I.see(firstTask);

  I.completeFirstTask();
  I.seeClearCompletedButton();
  I.seeFirstTaskCheckboxIsChecked();
});

Scenario('I can add multiple to-do tasks and tick all of them as completed', (I) => {
  I.navigateToDoListPageAndAddToDoTask(firstTask);
  I.see('todos');

  I.addToDoTask(firstTask);
  I.see(firstTask);

  I.addToDoTask(secondTask);
  I.see(secondTask);

  I.completeAllTasks();
  I.seeAndClickClearCompletedButton();
  I.dontSee(firstTask);
  I.dontSee(secondTask);
});

Scenario('I can delete a to-do task', (I) => {
  I.navigateToDoListPage();
  I.see('todos');
  I.addToDoTask(firstTask);
  I.see(firstTask);
  I.addToDoTask(secondTask);
  I.see(secondTask);
  I.wait(3);
  I.deleteFirstTask();
  I.wait(3);
  I.dontSee(firstTask);
  I.wait(3);
});

Scenario('I can filter to-do tasks', (I) => {
  I.navigateToDoListPage();
  I.see('todos');
  I.addToDoTask(firstTask);
  I.see(firstTask);
  I.addToDoTask(secondTask);
  I.see(secondTask);

  I.completeFirstTask();
  I.seeClearCompletedButton();
  I.seeFirstTaskCheckboxIsChecked();
  I.dontSeeSecondTaskCheckboxIsChecked();

  I.displayActiveTasks();
  I.see(secondTask);

  I.displayCompletedTasks();
  I.see(firstTask);

  I.displayAllTasks();
  I.see(firstTask);
  I.see(secondTask);
  I.seeFirstTaskCheckboxIsChecked();
  I.dontSeeSecondTaskCheckboxIsChecked();

});

Scenario('I can re-edit the task description', (I)=> {
  I.navigateToDoListPage();
  I.see('todos');
  I.addToDoTask(firstTask);
  I.see(firstTask);

  I.editFirstTask(newTask);
  I.see(newTask);
})
