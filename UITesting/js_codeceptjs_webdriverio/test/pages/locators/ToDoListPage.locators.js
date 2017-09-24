'use strict';

module.exports = {

  inputTextField : {
    xpath : '/html/body/section/header/input'
  },

  completeAllTasksCheckbox : {
    xpath : '/html/body/section/section/input'
  },

  clearCompletedFilterButton : {
    text : 'Clear Completed'
  },

  firstTaskCheckBox : {
    xpath : '/html/body/section/section/ul/li[1]/div/input'
  },

  firstDestoryButton : {
    css : 'body > section > section > ul > li:nth-child(1) > div > button'
  },

  secondTaskCheckBox : {
    xpath : '/html/body/section/section/ul/li[2]/div/input'
  },

  secondDestoryButton : {
    css : 'body > section > section > ul > li:nth-child(2) > div > button'
  },

  thirdTaskCheckBox : {
    xpath : '/html/body/section/section/ul/li[3]/div/input'
  },

  allFilterLink : {
    text : 'All'
  },

  activeFilterLink : {
    text : 'Active'
  },

  completedFilterLink : {
    text : 'Completed'
  }

}
