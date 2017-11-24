#### Intro
该项目是使用`chakram` + `mocha`实现的REST API测试demo。

#### 测试对象
* 使用[httpbin](http://httpbin.org/)作为测试对象。`httpbin`是一个HTTP Request & Response Service, 提供了各种HTTP场景以供测试需求
* [豆瓣 API V2](https://developers.douban.com/wiki/?title=api_v2)提供的电影信息。

#### 项目结构
```md
|-- js_mocha_chakram
    |-- .gitignore
    |-- README.md
    |-- package.json
    |-- data //存放环境数据和测试数据
    |   |-- env.data.js
    |   |-- test.data.js
    |-- test //存放测试套件
        |-- JSONTest.js
        |-- compressionTest.js
        |-- cookieTest.js
        |-- customAssertionsTest.js
        |-- headerTest.js
        |-- responseTimeTest.js
        |-- statusCodeTest.js
```

#### 运行测试
使用`npm install`来安装`chakram`到本地，使用`npm test`运行测试

#### 测试报告
* console output
* mochawesome-report/mochawesome.html
