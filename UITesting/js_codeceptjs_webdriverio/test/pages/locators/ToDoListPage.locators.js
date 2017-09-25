'use strict';

module.exports = {

  inputTextField : {
    xpath : '/html/body/section/header/input'
  },

  firstTaskLabel: {
    xpath : '/html/body/section/section/ul/li[1]/div/label'
  },

  firstTaskTextField: {
    xpath : '/html/body/section/section/ul/li[1]/input'
  },

  completeAllTasksCheckbox : {
    xpath : '/html/body/section/section/input'
  },

  clearCompletedFilterButton :  'Clear completed',

  firstTaskCheckBox : {
    xpath : '/html/body/section/section/ul/li[1]/div/input'
  },

  firstDestoryButton : {
    css : 'body > section > section > ul > li:nth-child(1) > div > button'
  },

  secondTaskLabel: {
    xpath : '/html/body/section/section/ul/li[2]/div/label'
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

  allFilterLink :  'All',

  activeFilterLink : 'Active',

  completedFilterLink : 'Completed',

  counterText : {
    xpath : '/html/body/section/footer/span'
  },

  footerText : {
    xpath : '/html/body/footer/p[1]'
  }

}
