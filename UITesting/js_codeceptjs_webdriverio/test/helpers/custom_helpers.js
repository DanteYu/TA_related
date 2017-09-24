'use strict';

class MyHelper extends Helper {

  // _init(){
  //   console.log('this is the _init method from MyHelper');
  //   return;
  // };
  //
  // _before(){
  //   console.log('this is the _before method from MyHelper');
  //   return;
  // };
  //
  // _after(){
  //   console.log('this is the _after method from MyHelper');
  //   return;
  // };
  //
  // _beforeSuite(){
  //   console.log('this is the _beforeSuite method from MyHelper');
  //   return;
  // };
  //
  // _afterSuite(){
  //   console.log('this is the _afterSuite method from MyHelper');
  //   return;
  // };
  //
  // _beforeStep(){
  //   console.log('this is the _beforeStep method from MyHelper');
  //   return;
  // };
  //
  // _afterStep(){
  //   console.log('this is the _afterStep method from MyHelper');
  //   return;
  // };

sayHelloWorld(){
  console.log('Hello world in MyHelper');
  return;
};

openBaiduByWebdriver(){
  let client = this.helpers['WebDriverIO'].browser;
  client.url('https://www.baidu.com/');
  console.log(client.getUrl());
  return;
};

getConf(){
  let defaulthost = this.config.defaultHost;
  console.log(defaulthost);
  return;
}

}

module.exports = MyHelper;
