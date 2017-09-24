
'use strict';

const mainPageLocators = require('./locators/MainPage.locators.js')

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },

  // insert your locators and methods here

  clickVueJSLink : function(){
    I.see(mainPageLocators.vuejs);
    I.click(mainPageLocators.vuejs);
  }

}
