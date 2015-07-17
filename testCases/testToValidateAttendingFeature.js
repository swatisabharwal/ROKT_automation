var session = require("../sessionInitiator/browserSession");
var widgetPage = require ("../pageObjects/widgetPageObject");

describe('Protractor Demo App', function() {

  it('Launch Browser',function(){
  	 session.create();
   	 browser.ignoreSynchronization = true;
  });
  
  it('Switch To Widget', function() {
  	widgetPage.switchToWidgetFrame();
  });
  
   it('Verify widget overlay', function() {
   	
   	widgetPage.verifyWidgetOverlay();
  });
   
   it('Verify Share on Facebook label on widget',function(){
  
  	widgetPage.verifyShareFacebboklabel();
   });
   
   it('Click Attending Event button for Facebook',function(){
 
   	widgetPage.clickOnAttendingButton();
  });
   
  
});
