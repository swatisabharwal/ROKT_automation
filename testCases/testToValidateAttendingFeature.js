var WidgetPage = require('../pageObjects/WidgetPageObject.js');
var browserSession = require('../sessionInitiator/browserSession.js');

  describe('ROKT Widget Demo Test Using Protractor -- ', function () {
  var session = new browserSession();
  var Wpage = new WidgetPage();
	
	it('Verify iFrame and switch to it', function () {	
		expect(Wpage.widgetFrame.isDisplayed()).toBe(true);
		Wpage.switchToWidgetFrame();
		console.log("User successfully switched to widget iFrame");

	});


  	it('Verify widget Overlay appears', function () {
  		expect(Wpage.getVisibiltyOfWidgetOverlay()).toBe(true);
  		console.log("Widget Overlay is correctly displayed");
  
	});
	
	it('Verify the message -- Share on Facebook', function () {
  		expect(Wpage.getShareLabelText()).toBe('Share on Facebook');
  		console.log("Application displays the message 'Share on Facebook' correctly on the widget");
  
	});
	
	it('Click \'Attending\' Button and validate Facebook Auth screen ', function () {
  		browser.sleep(5000);
  		Wpage.clickOnAttendButton();
  		browser.sleep(5000);
  		console.log("Widget Overlay is correctly displayed");
  
	});
	
	it('Handling Fb Window ', function () {
		expect(Wpage.fbWindowHandler()).toBe('true');
		browser.sleep(5000);
		console.log("FaceBook Window is handled");

	}); 

	it('Entering Fb Credentials ', function () {
		expect(Wpage.inputFbId()).toBe('true');
		expect(Wpage.inputFbPass()).toBe('true');
		expect(Wpage.clickOnLoginBtn()).toBe('true');
		browser.sleep(5000);
		console.log("LoggedIn into FaceBook");

	});

	it('Verifying SendInvitation Button ', function () {
		expect(Wpage.verifySendInvitationButton()).toBe('true');
		browser.sleep(5000);
		console.log("Send Invitation Button Verified");	

	});
	
	it('click on agreement checkbox' , function () {
  		expect(Wpage.clickCheckbBox()).toBe('true');	
		console.log('Ticked on CheckBox');

	});

	it('verify and click on continue' , function () {
		expect(Wpage.verifyContBtn()).toBe('true');
		console.log("Continue button is available");
		expect(Wpage.clickContBtn()).toBe('true');
		console.log("clicked on continue button");	

	});

});