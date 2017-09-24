'use strict';

const dataset = require('../testdata/ToDoList.data.js');

const mainPageUrl = '/';
const firstTask = dataset.TaskName.firstTask;
const secondTask = dataset.TaskName.secondTask;

Feature('To Do List Functionality Test Suite');

Background((I) => {
  I.amOnPage(mainPageUrl);
  I.seeTitleEquals('TodoMVC');
});

Scenario('I can add a to do task and tick it as completed', (I) => {

  // mainPage.clickVueJSLink();
  // I.wait(10);
  // I.seeTitleEquals('Vue.js • TodoMVC');

  I.addToDoTask(firstTask);
  I.addAnotherToDoTask(secondTask);

});

xScenario('I can add a to do task and tick it as completed', (I, mainPage, toDoListPage) => {

  mainPage.clickVueJSLink();
  I.wait(10);
  I.seeTitleEquals('Vue.js • TodoMVC');

});

xScenario('I can delete a to do task', (I) => {

});

xScenario('I can filter to do tasks', (I) => {

});
