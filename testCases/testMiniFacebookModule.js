var WidgetPage = require('../pageObjects/WidgetPageObject.js');
var browserSession = require('../sessionInitiator/browserSession.js');

 describe('ROKT Widget Demo Test Using Protractor -- File: testMiniFacebookModule', function () {
  var session = new browserSession();
  var Wpage = new WidgetPage();
		
	it('1. Verify iFrame and switch to it', function () {	
        browser.driver.sleep(5000);   
		expect(Wpage.widgetFrame.isDisplayed()).toBe(true);
		Wpage.switchToWidgetFrame();
		console.log("User successfully switched to widget iFrame");

	});


  	it('2. Verify widget Overlay appears', function () {
  		expect(Wpage.getVisibiltyOfWidgetOverlay()).toBe(true);
  		console.log("Widget Overlay is correctly displayed");
  
	});
	
	it('3. Verify the message -- Share on Facebook', function () {
  		expect(Wpage.getShareLabelText()).toBe('Share on Facebook');
  		console.log("Application displays the message 'Share on Facebook' correctly on the widget");
  
	});
	
	it('4. Click \'Attending\' Button and validate Facebook Auth screen ', function () {
        browser.driver.sleep(5000);   
  		Wpage.clickOnAttendButton();
        browser.driver.sleep(5000);   
  		console.log("Widget Overlay is correctly displayed");
  
	});
	
	it('5. Handling Fb Window ', function () {
		Wpage.fbWindowHandler();
        browser.driver.sleep(5000);   
		console.log("FaceBook Window is handled");

	}); 

	it('6. Entering Fb Credentials ', function () {
		Wpage.inputFbId();
        browser.driver.sleep(5000);   
		Wpage.inputFbPass();
        browser.driver.sleep(5000);   
		Wpage.clickOnLoginBtn();
        browser.driver.sleep(5000);   
		console.log("LoggedIn into FaceBook");

	});

	it('7. Verifying SendInvitation Button ', function () {
		console.log('verifying invitation btn');
		browser.driver.sleep(5000); 
		Wpage.switchToWidgetFrame();  
		expect(Wpage.verifySendInvitationButton()).toBe(true);
        browser.driver.sleep(5000);   
		console.log("Send Invitation Button Verified");	

	});
	


});