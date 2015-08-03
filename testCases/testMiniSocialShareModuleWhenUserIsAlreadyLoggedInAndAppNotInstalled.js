var WidgetPage         = require('../pageObjects/WidgetPageObject.js');
var browserSession     = require('../sessionInitiator/browserSession.js');
var mainModule         = require('../pageObjects/mainSocialShareModuleObject.js');
var faceBookPageObject = require('../pageObjects/faceBookPageObject.js');
var fbSession          = require('../sessionInitiator/fbSession.js');
var fbEventSession     = require('../sessionInitiator/fbEventSession.js');


var doWeNeedAppInstalled = false;
var isAppInstalled;


describe('ROKT Widget Demo Test Using Protractor -- File: testMiniSocialShareModuleWhenUserIsAlreadyLoggedInAndAppNotInstalled', function() {
	
	var fbPage = new faceBookPageObject();
	var Wpage = new WidgetPage();
	var mainPage = new mainModule();

    it('Pre-requisite (1) : Check if App is installed or not on Facebook and  if installed Remove it', function() {
		var fbsession = new fbSession();
		fbPage.inputFbId();
		fbPage.inputFbPass();
		fbPage.clickOnLoginBtn();
		browser.driver.sleep(6000);
		fbPage.fbSettingsTab();
		browser.driver.sleep(2000);   
		fbPage.seeMoreSettingsTab();
		browser.driver.sleep(2000);   
		fbPage.userApps();
		browser.driver.sleep(2000); 

		fbPage.checkAppAlreadyInstalledOrNot('tripcierge').then(function(value){
			if(value === 0 ){
				isAppInstalled = false;
			}else{
				isAppInstalled = true;
			}
			if(isAppInstalled === doWeNeedAppInstalled){
				console.log("[Info] : App is already in required state, no need to change");
			}else{
				if(doWeNeedAppInstalled){
					console.log("[Info] : App should be installed for the scenario but actually it's not, installing it now");
					var session = new browserSession();
					browser.driver.sleep(5000);
					Wpage.switchToWidgetFrame().then(function(){
					var wP = new WidgetPage();
					wP.installAppThroughMiniShareModule();
					expect(wP.verifySendInvitationButton()).toBe(true);
     			});
				}else{
					console.log("[Info] : App should not be installed for the scenario but actually it's there, un-installing it now");
					fbPage.appRemove("tripcierge");
					browser.driver.sleep(5000);   
					fbPage.removeNow();		 
					browser.driver.sleep(2000);
				}
			}
		});
		
		
	});

	it('Pre-requisite (2) : Already Logged in and unattending the event', function (){
		var fbeventsession = new fbEventSession();
		browser.driver.sleep(6000);
		expect(fbPage.verifyHomeTabObFb()).toBe(true);
		fbPage.checkForJoinButtonOnEventsPageAndRemoveUserIfJoinedAlready();
	});
	
    it('STEP (1) : Navigate to ROKT widget home page', function() {
		var session = new browserSession();
		browser.driver.sleep(5000);
	});

	it('STEP (2) : Verify Widget Overlay', function() {
		expect(Wpage.widgetFrame.isDisplayed()).toBe(true);
		Wpage.switchToWidgetFrame().then(function() {
		expect(Wpage.getVisibiltyOfWidgetOverlay()).toBe(true);
	});
	
	it('STEP (3) : Verify Attending button and Click on it', function() {
		browser.driver.sleep(2000);
		expect(Wpage.verifyMiniAttendButton()).toBe(true);
		browser.driver.sleep(2000);
		Wpage.clickOnMiniAttendButton();
	});
		
	it('STEP (4) : Installing ticketmaster application', function () {
		Wpage.fbWindowHandler();
        browser.driver.sleep(5000);   
	    expect(Wpage.verifyInstallationPage()).toBe(true);
		Wpage.clickOkayToInstall();
	});
	
	it('STEP (5) : Verify Send Invitation Button and Click on it', function() {
		console.log('verifying invitation btn');
		Wpage.switchToWidgetFrame();
		browser.driver.sleep(2000);
		expect(Wpage.verifySendInvitationButton()).toBe(true);
		browser.driver.sleep(2000);
		Wpage.sendInvitationButtonClick();

	});

	it('STEP (6) : Verify Ticketmaster Event Link on "Send a Message" window'', function() {
		Wpage.switchToSendInvitationFrames();
		browser.driver.sleep(2000);
		expect(Wpage.verifyPostOverlay()).toBe(true);
	});

	it('STEP (7) : Enter friend name to share this event with on "Send a Message" window', function() {
		Wpage.enterRecepient();
		browser.driver.sleep(2000);
		Wpage.clickOnSend();
		browser.driver.sleep(2000);

	});
	
    it('STEP (8) : Navigate to facebook event page', function() {
		var fbeventsession = new fbEventSession();
		browser.driver.sleep(2000);

	it('STEP (9) : Verify that user is able to join the event' ,function (){
		fbPage.clickJoinPage();
		browser.driver.sleep(5000);
		expect(fbPage.eventStatus()).toBe(true);
		expect(fbPage.userEventStatus()).toBe(true);
	});

	it('STEP (10) : Logout from facebook', function() {
		fbPage.logoutTab();
		browser.driver.sleep(5000);
		fbPage.logoutBtn();
		browser.driver.sleep(5000);
	});

	it('STEP (11) : Login on facebook as the friend with whom event invitation is shared', function() {
		browser.driver.sleep(2000);
		fbPage.inputFrndFbId();
		fbPage.inputFbPass();
		fbPage.clickOnLoginBtn();
		browser.driver.sleep(5000);
	});

	it('STEP (12) : Verify if message is received by that friend', function() {
		fbPage.clickMessages();
		browser.driver.sleep(2000);
		fbPage.selectSender();
		browser.driver.sleep(2000);
		expect(fbPage.verifyMessage()).toBe(true);
	});

	it('STEP (13) : Remove Message from friend message box and log out', function() {
		browser.driver.sleep(2000);
		fbPage.messageSettings();
		browser.driver.sleep(2000);
		fbPage.clearMessages();
		browser.driver.sleep(2000);
		fbPage.clearConversation();
		fbPage.logoutTab();
		fbPage.logoutBtn();
	});

});
