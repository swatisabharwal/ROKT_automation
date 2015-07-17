exports.config = {
  directConnect: true,
  seleniumAddress: 'http://localhost:4545/wd/hub',
  specs: ['./testCases/testToValidateAttendingFeature.js'],
  rootElement: '',
  
  capabilities: {
    browserName: 'chrome'
  },

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: true,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 200000
  },
  
   onPrepare: function() {
   browser.driver.manage().window().maximize();
   global.isAngularSite = function(flag){
            browser.ignoreSynchronization = !flag;
   
  };
  }
};