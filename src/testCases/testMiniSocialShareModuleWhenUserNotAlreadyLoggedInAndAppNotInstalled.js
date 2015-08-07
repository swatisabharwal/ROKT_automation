var WidgetPage         = require('../pageObjects/widgetPageObject.js');
var mainModule         = require('../pageObjects/mainSocialShareModuleObject.js');
var faceBookPageObject = require('../pageObjects/faceBookPageObject.js');
var singleSession      = require('../sessionInitiator/Session.js');
var dataObject         = require('../dataFile/dataObject.json');

var doWeNeedAppInstalled = false;
var isAppInstalled;


 describe('ROKT Widget Demo Test Using Protractor -- File: testMiniSocialShareModuleWhenUserNotAlreadyLoggedInAndAppNotInstalled', function () {
	 
	var fbPage = new faceBookPageObject();
	var Wpage = new WidgetPage();
	var mainPage = new mainModule();
    
   
	it('Pre-requisite (1) : Check if App is installed or not on Facebook and if installed Remove it', function() {
		var ssession = new singleSession(dataObject.url.fbUrl);
		fbPage.inputFbId();
		browser.driver.sleep(2000);
		fbPage.inputFbPass();
		browser.driver.sleep(2000);
		fbPage.clickOnLoginBtn();
		browser.driver.sleep(5000);
		fbPage.fbSettingsTab();
		browser.driver.sleep(5000);
		fbPage.seeMoreSettingsTab();
		browser.driver.sleep(5000);
     	fbPage.userApps();
		
		fbPage.checkAppAlreadyInstalledOrNot(dataObject.app).then(function(value){
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
					var ssession = new singleSession(dataObject.url.AppUrl);
					browser.driver.sleep(5000);
					Wpage.switchToWidgetFrame().then(function(){
					var wP = new WidgetPage();
					browser.driver.sleep(5000);
					wP.installAppThroughMiniShareModule();
					expect(wP.verifySendInvitationButton()).toBe(true);
				});
				}else{
					console.log("[Info] : App should not be installed for the scenario but actually it's there, un-installing it now");
					fbPage.appRemove(dataObject.app);
					browser.driver.sleep(5000);
					fbPage.removeNow();		 
					browser.driver.sleep(5000);
				}
			}
		});
		
	});

    it('Pre-requisite (2) : Already Logged in and unattending the event', function (){
		var ssession = new singleSession(dataObject.url.fbEventUrl);
		expect(fbPage.verifyHomeTabObFb()).toBe(true);
		browser.driver.sleep(5000);
		fbPage.checkForJoinButtonOnEventsPageAndRemoveUserIfJoinedAlready();
		browser.driver.sleep(5000);
		fbPage.logoutTab();
		browser.driver.sleep(5000);
        fbPage.logoutBtn();
 }); 

	it('STEP (1) : Navigate to ROKT widget home page', function() {
		var ssession = new singleSession(dataObject.url.AppUrl);
		
	});

	it('STEP (2) : Verify Widget Overlay', function() {
		browser.driver.sleep(5000);
		expect(Wpage.widgetFrame.isDisplayed()).toBe(true);
		Wpage.switchToWidgetFrame();
		browser.driver.sleep(5000);
		expect(Wpage.getVisibiltyOfWidgetOverlay()).toBe(true);
	});
	
	it('STEP (3) : Verify Attending button and Click on it', function() {
		expect(Wpage.verifyMiniAttendButton()).toBe(true);
		browser.driver.sleep(5000);
		Wpage.clickOnMiniAttendButton();
	});	
	   
	it('STEP (4) : Entering UserId and Password into facebook PopUp window ', function () {
		Wpage.fbWindowHandler();
        browser.driver.sleep(5000);
		Wpage.inputFbId();
     	Wpage.inputFbPass();
		browser.driver.sleep(5000);
     	Wpage.clickOnFbLoginBtn();
        browser.driver.sleep(5000);   
	});
		
	it('STEP (5) : Installing ticketmaster application', function (){
		expect(Wpage.verifyInstallationPage()).toBe(true);
		browser.driver.sleep(5000);
		Wpage.clickOkay();
		expect(Wpage.verifyManageYourEventsWindow()).toBe(true);
		browser.driver.sleep(5000);
		Wpage.clickOkayToInstall();
 });
	
	it('STEP (6) : Share post on facebook ', function (){
   		browser.driver.sleep(5000);
		Wpage.switchToWidgetFrame();
		browser.driver.sleep(5000);
		Wpage.switchToSendInvitationFrames();
	    browser.driver.sleep(5000);
		Wpage.postMessage();
		browser.driver.sleep(5000);
		Wpage.clickPostSend();
	});
	
    it('STEP (7) : Verify Send Invitation Button and Click on it', function() {
		browser.driver.sleep(5000);
		Wpage.switchToWidgetFrame();
    	expect(Wpage.verifySendInvitationButton()).toBe(true);
		browser.driver.sleep(5000);
		Wpage.sendInvitationButtonClick();

	});
	
	it('STEP (8) : Verify Ticketmaster Event Link on "Send a Message" window', function() {
		browser.driver.sleep(5000);
		Wpage.switchToSendInvitationFrames();
		browser.driver.sleep(5000);
		expect(Wpage.verifyPostOverlay()).toBe(true);	
		expect(Wpage.verifyWindowEvent()).toBe(true);
	});

	it('STEP (9) : Enter friend name to share this event with on "Send a Message" window', function() {
		browser.driver.sleep(5000);
		Wpage.enterRecepient();
		browser.driver.sleep(5000);
		Wpage.clickOnSend();
	});
	
    it('STEP (10) : Navigate to facebook event page', function() {
		var ssession = new singleSession(dataObject.url.fbEventURl);
		
    });		
	
	it('STEP (11) : Verify that user is able to join the event' ,function (){
		expect(fbPage.eventStatus()).toBe(true);
		browser.driver.sleep(5000);
		expect(fbPage.userEventStatus()).toBe(true);
	});

	it('STEP (12) : Logout from facebook', function() {
		browser.driver.sleep(5000);
		fbPage.logoutTab();
		browser.driver.sleep(5000);
		fbPage.logoutBtn();
		
	});

	it('STEP (13) : Login on facebook as the friend with whom event invitation is shared', function() {
		fbPage.inputFrndFbId();
		fbPage.inputFbPass();
		fbPage.clickOnLoginBtn();
	    browser.driver.sleep(5000);
	});

	it('STEP (14) : Verify if message is received by that friend', function() {
		fbPage.clickMessages();
		browser.driver.sleep(5000);
		fbPage.selectSender();
		browser.driver.sleep(5000);
		expect(fbPage.verifyMessage()).toBe(true);
	});

	it('STEP (15) : Remove Message from friend message box and log out', function() {
		browser.driver.sleep(5000);
		fbPage.messageSettings();
		browser.driver.sleep(5000);
		fbPage.clearMessages();
		browser.driver.sleep(5000);
		fbPage.clearConversation();
		browser.driver.sleep(5000);
		fbPage.logoutTab();
		browser.driver.sleep(5000);
		fbPage.logoutBtn();
	});
	
});
