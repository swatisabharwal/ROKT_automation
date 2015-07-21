var WidgetPage = require('../pageObjects/WidgetPageObject.js');
var browserSession = require('../sessionInitiator/browserSession.js');

  describe('ROKT Widget Demo Test Using Protractor -- ', function () {
  var session = new browserSession();
  var page = new WidgetPage();
	
	it('Verify iFrame and switch to it', function () {	
		expect(page.widgetFrame.isDisplayed()).toBe(true);
		page.switchToWidgetFrame();
		console.log("User successfully switched to widget iFrame");

	});


  	it('Verify widget Overlay appears', function () {
  		expect(page.getVisibiltyOfWidgetOverlay()).toBe(true);
  		console.log("Widget Overlay is correctly displayed");
  
	});
	
	it('Verify the message -- Share on Facebook', function () {
  		expect(page.getShareLabelText()).toBe('Share on Facebook');
  		console.log("Application displays the message 'Share on Facebook' correctly on the widget");
  
	});
	
	it('Click \'Attending\' Button and validate Facebook Auth screen ', function () {
  		page.clickOnAttendButton();
  		browser.sleep(5000);
  		console.log("Widget Overlay is correctly displayed");
  
	});

});