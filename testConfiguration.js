var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {
  directConnect: true,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./testCases/mainSocialShareModule.js'],
 //./testCases/fbUiAutomate.js',
 // ,'./testCases/testToValidateAttendingFeature.js'
  capabilities: {
    browserName: 'chrome'
  },

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: true,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 300000
  },
  
   onPrepare: function() {
   browser.driver.manage().window().maximize();
    jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'output'
       }));
       
   global.isAngularSite = function(flag){
            browser.ignoreSynchronization = !flag;
   
  };
  }
};

