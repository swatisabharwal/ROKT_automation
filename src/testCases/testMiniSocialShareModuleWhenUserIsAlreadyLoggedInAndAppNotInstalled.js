var WidgetPage         = require('../pageObjects/WidgetPageObject.js');
var mainModule         = require('../pageObjects/mainSocialShareModuleObject.js');
var faceBookPageObject = require('../pageObjects/faceBookPageObject.js');
var singleSession      = require('../sessionInitiator/Session.js');
var dataObject         = require('../dataFile/dataObject.json');


var doWeNeedAppInstalled = false;
var isAppInstalled;


describe('ROKT Widget Demo Test Using Protractor -- File: testMiniSocialShareModuleWhenUserIsAlreadyLoggedInAndAppNotInstalled', function() {
	
	var fbPage = new faceBookPageObject();
	var Wpage = new WidgetPage();
	var mainPage = new mainModule();

    it('Pre-requisite (1) : Check if App is installed or not on Facebook and  if installed Remove it', function() {
		var ssession = new singleSession(dataObject.url.fbUrl);
		fbPage.inputFbId();
		fbPage.inputFbPass();
		fbPage.clickOnLoginBtn();
		fbPage.fbSettingsTab();
		fbPage.seeMoreSettingsTab();
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
					Wpage.switchToWidgetFrame().then(function(){
					var wP = new WidgetPage();
					browser.driver.sleep(2000);
					wP.installAppThroughMiniShareModule();
					expect(wP.verifySendInvitationButton()).toBe(true);
     			});
				}else{
					console.log("[Info] : App should not be installed for the scenario but actually it's there, un-installing it now");
					fbPage.appRemove(dataObject.app);
					fbPage.removeNow();		 
					}
			}
		});
		
		
	});

	it('Pre-requisite (2) : Already Logged in and unattending the event', function (){
		var ssession = new singleSession(dataObject.url.fbEventUrl);
		expect(fbPage.verifyHomeTabObFb()).toBe(true);
		fbPage.checkForJoinButtonOnEventsPageAndRemoveUserIfJoinedAlready();
		});
	
    it('STEP (1) : Navigate to ROKT widget home page', function() {
		var ssession = new singleSession(dataObject.url.AppUrl);
		
	});

	it('STEP (2) : Verify Widget Overlay', function() {
		Wpage.switchToWidgetFrame();
		expect(Wpage.getVisibiltyOfWidgetOverlay()).toBe(true);
	});
	
	it('STEP (3) : Verify Attending button and Click on it', function() {
		expect(Wpage.verifyMiniAttendButton()).toBe(true);
		Wpage.clickOnMiniAttendButton();
	});
		
	it('STEP (4) : Installing ticketmaster application', function () {
		Wpage.fbWindowHandler();
        expect(Wpage.verifyInstallationPage()).toBe(true);
		Wpage.clickOkay();
		expect(Wpage.verifyManageYourEventsWindow()).toBe(true);
		Wpage.clickOkayToInstall();
	});
	
	it('STEP (5) : Share post on facebook ', function (){
   		Wpage.switchToWidgetFrame();
		Wpage.switchToSendInvitationFrames();
		Wpage.postMessage();
		Wpage.clickPostSend();
	});
	
	it('STEP (6) : Verify Send Invitation Button and Click on it', function() {
		Wpage.switchToWidgetFrame();
		expect(Wpage.verifySendInvitationButton()).toBe(true);
		Wpage.sendInvitationButtonClick();

	});

	it('STEP (7) : Verify Ticketmaster Event Link on "Send a Message" window', function() {
		Wpage.switchToSendInvitationFrames();
		expect(Wpage.verifyPostOverlay()).toBe(true);	
		expect(Wpage.verifyWindowEvent()).toBe(true);
	});

	it('STEP (8) : Enter friend name to share this event with on "Send a Message" window', function() {
		Wpage.enterRecepient();
	    Wpage.clickOnSend();
	});
	
    it('STEP (9) : Navigate to facebook event page', function() {
		var ssession = new singleSession(dataObject.url.fbEventUrl);
		
	});

	it('STEP (10) : Verify that user is able to join the event' ,function (){
		expect(fbPage.eventStatus()).toBe(true);
		expect(fbPage.userEventStatus()).toBe(true);
	});
	
	it('STEP (11): Verify the event post on user profile',function(){
		fbPage.clickOnUserPorifleTab();
		expect(fbPage.verifyTicketmasterLinkOnProfile()).toBe(true);
		expect(fbPage.verifyFbPostMessage()).toBe(true);
		fbPage.clickOnFbPostOptionTab();
		fbPage.clickOnFbPostDeleteTab();
		fbPage.clickOnFbPostDeleteNowButton();
	});


	it('STEP (12) : Logout from facebook', function() {
		fbPage.logoutTab();
		fbPage.logoutBtn();
	});

	it('STEP (13) : Login on facebook as the friend with whom event invitation is shared', function() {
		fbPage.inputFrndFbId();
		fbPage.inputFbPass();
		fbPage.clickOnLoginBtn();
	});

	it('STEP (14) : Verify if message is received by that friend', function() {
		fbPage.clickMessages();
		fbPage.selectSender();
		expect(fbPage.verifyMessage()).toBe(true);
	});

	it('STEP (15) : Remove Message from friend message box and log out', function() {
		fbPage.messageSettings();
		fbPage.clearMessages();
		fbPage.clearConversation();
		fbPage.logoutTab();
		fbPage.logoutBtn();
	});

});
