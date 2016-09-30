var serverData = require("./serverData.json");
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var JasmineSpecReporter = require('jasmine-spec-reporter');

module.exports = {
    restartBrowserBetweenTest: true,

    capabilities: {
        'browserName': 'chrome',

        // This is added to use incognito mode for Chrome Browsers
        'chromeOptions': {
            'args': ['incognito', 'start-maximized', '--window-size=1690‌​,1200']
            // embedded-extension-options, extensions-on-chrome-urls, isolate-extensions, enable-extensions
            // disable-component-extensions-with-background-pages, disable-extensions
        },

//        proxy: {
//            proxyType: 'manual',
//            httpProxy: 'localhost:3128',
//            sslProxy: 'localhost:3128'
//        }
    },

    //ie, `npm run test --endpoint="localhost"`
    baseUrl: serverData.baseUrl,

    onComplete: function() {
    },


    onPrepare: function() {

        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: './reports/',
                screenshotsFolder: './images',
                takeScreenshots: false,
                takeScreenshotsOnlyOnFailures: false
            })
        );

        // add jasmine spec reporter
        jasmine.getEnv().addReporter(new JasmineSpecReporter({displayStacktrace: 'all'}));

    },

    allScriptsTimeout: 300000,

    jasmineNodeOpts: {
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        print: function() {},
        defaultTimeoutInterval: 500000
    }

};
