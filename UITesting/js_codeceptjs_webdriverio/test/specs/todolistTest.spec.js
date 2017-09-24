'use strict';

const taskdata = require('../testdata/ToDoList.data.js');
const taskset = require('../testdata/taskset.js')();
// const output =require('codeceptjs').output;

const mainPageUrl = '/';
const firstTask = taskdata.TaskName.firstTask;
const secondTask = taskdata.TaskName.secondTask;

Feature('To Do List Functionality Test Suite');

Background((I) => {
  I.amOnPage(mainPageUrl);
  I.seeTitleEquals('TodoMVC');
});

Scenario('I can add a to-do task', (I) => {

  // mainPage.clickVueJSLink();
  // I.wait(10);
  // I.seeTitleEquals('Vue.js • TodoMVC');
  I.navigate2ToDoListPage();
  I.addToDoTask(firstTask);

});

Data(taskset.tasks).Scenario('I can add multiple to-do tasks', (I, current) => {
  I.navigate2ToDoListPage();
  I.say('I add #' + current.number + ' task');
  I.addToDoTask(cuurent.description);

});

xScenario('I can add a to-do task and tick it as completed', (I) => {

  mainPage.clickVueJSLink();
  I.wait(10);
  I.seeTitleEquals('Vue.js • TodoMVC');

});

xScenario('I can delete a to-do task', (I) => {

});

xScenario('I can filter to-do tasks', (I) => {

});
