
此项目是一个[codeceptjs](http://codecept.io/)的简单demo，使用了[webdriverio](http://webdriver.io/)作为Helper并且引用了[mochawesome](https://www.npmjs.com/package/mochawesome)作为reporter。

测试对象为 [TODOMVC](http://todomvc.com/examples/vue/)

因为此demo目的是展示更多codeceptjs的功能，所以测试设计方面略有不必要的重复，比如
* 测试场景有些重复步骤
* 其实step objects在这个列子中有些重复，只是为了在demo中展示step objects的应用场景而加上

更多的文章可以参考[这里](https://danteyu.github.io/tags/#codeceptjs)

#### 项目目录结构
```
|-- js_codeceptjs_webdriverio
    |-- .gitignore   
    |-- README.md  
    |-- codecept.json    //codeceptjs的配置文件。详细内容可以参考 https://danteyu.github.io/2017/09/12/codeceptjs5/
    |-- package.json    // npm的配置文件，内容包含了很多项目元数据。依赖的包和测试执行命令都在此文件中定义。
    |-- output   //测试报告或测试失败输出的截图会放在这个目录下
    |   |-- I_can_delete_a_to-do_task.failed.png
    |   |-- I_can_filter_to-do_tasks.failed.png
    |   |-- I_can_re-edit_the_task_description.failed.png
    |   |-- mochawesome.html
    |   |-- mochawesome.json
    |   |-- basic_browser_chrome_1
    |   |   |-- mochawesome.html
    |   |   |-- mochawesome.json
    |   |-- regression_browser_firefox_1
    |   |   |-- I_can_add_a_to-do_task_@regression.failed.png
    |   |   |-- I_can_add_a_to-do_task_and_tick_it_as_completed_@regression.failed.png
    |   |   |-- I_can_delete_a_to-do_task_@regression.failed.png
    |   |   |-- I_can_filter_to-do_tasks_@regression.failed.png
    |   |   |-- I_can_re-edit_the_task_description_@regression.failed.png
    |   |   |-- mochawesome.html
    |   |   |-- mochawesome.json
    |   |-- smoke_browser_firefox_1
    |   |   |-- I_can_add_multiple_to-do_tasks_@smoke___{'number'_'1','description'_'task_a'}.failed.png
    |   |   |-- I_can_add_multiple_to-do_tasks_@smoke___{'number'_'2','description'_'task_b'}.failed.png
    |   |   |-- I_can_add_multiple_to-do_tasks_@smoke___{'number'_'3','description'_'task_c'}.failed.png
    |   |   |-- I_can_add_multiple_to-do_tasks_and_tick_all_of_them_as_completed_@smoke.failed.png
    |-- test  
        |-- steps_file.js  //扩展I对象的文件。里面定义的方法可直接被I对象调用
        |-- helpers  //自己定义的Helper。里面定义的方法可直接被I对象调用
        |   |-- custom_helpers.js
        |-- pages  //使用page object设计模式
        |   |-- MainPage.po.js //mainpage的主要操作方法
        |   |-- ToDoListPage.po.js //todolistpage的主要操作方法
        |   |-- locators //里面放着各个page的locators。主要采用css/xpath/text
        |       |-- MainPage.locators.js
        |       |-- ToDoListPage.locators.js
        |-- specs //测试场景存放在此，也是test runner执行的对象
        |   |-- todolistTest.spec.js
        |-- steps //step objects模式。不同页面之间的复杂业务交互可以在此文件中定义实现，并且被测试场景文件所调用
        |   |-- ToDoList.step.js
        |-- testdata  //测试数据分离
        |   |-- ToDoList.data.js
        |   |-- taskset.data.js
        |-- util  
            |-- bootstrapAndTeardown //定义selenium server启动和关闭方法，会在测试运行前后自动通过codeceptjs的bootstrap和teardown功能执行
            |   |-- selenium-standalone-start.js
            |   |-- selenium-standalone-stop.js
            |-- custom_hooks  //可以自定义一些hooks，用于扩展codeceptjs的功能
                |-- event_listener.js
```

#### 环境设置

`npm install` 会安装依赖包到本地

#### 运行测试

* `npm test`会跑所有的测试
* `npm run smoke`会跑所有有`@smoke`的测试
* `npm run test_chrome_firefox`会在chrome和firefox中跑所有的测试

更多命令参考如下

```
"scripts": {
  "test": "codeceptjs run -c codecept.json --debug --reporter mochawesome",
  "smoke": "codeceptjs run -c codecept.json --debug --grep @smoke --reporter mochawesome",
  "regression": "codeceptjs run -c codecept.json --debug --grep @regression --reporter mochawesome",
  "test_chrome_firefox": "codeceptjs run-multiple --all --debug --reporter mochawesome",
  "regression_chrome": "codeceptjs run-multiple regression:chrome --debug --reporter mochawesome",
  "smoke_firefox": "codeceptjs run-multiple smoke:firefox --debug --reporter mochawesome"
}
```
