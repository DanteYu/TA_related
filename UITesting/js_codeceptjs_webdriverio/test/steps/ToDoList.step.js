
'use strict';

let I, mainPage, ToDoListPage;

const mainPageUrl = '/';

module.exports = {

  _init() {
    I = require('../steps_file.js')();
    mainPage = require('../pages/MainPage.po.js');
    mainPage._init();
    ToDoListPage = require('../pages/ToDoListPage.po.js');
    ToDoListPage._init();
  },

  // insert your locators and methods here

  addToDoTask: function(task_text){
    mainPage.clickVueJSLink();
    ToDoListPage.enterTask(task_text);
  },

  addAnotherToDoTask: function(task_text){
    ToDoListPage.enterTask(task_text);
  }

}
