var WidgetPage         = require('../pageObjects/WidgetPageObject.js');
var browserSession     = require('../sessionInitiator/browserSession.js');
var mainModule         = require('../pageObjects/mainSocialShareModuleObject.js');
var faceBookPageObject = require('../pageObjects/faceBookPageObject.js');
var fbSession          = require('../sessionInitiator/fbSession.js');
var fbEventSession     = require('../sessionInitiator/fbEventSession.js');


var doWeNeedAppInstalled = true;
var isAppInstalled;


describe('ROKT Widget Demo Test Using Protractor -- File: testMainSocialShareModuleWhenUserIsAlreadyLoggedInAndAppInstalled', function() {
	
	var fbPage = new faceBookPageObject();
	var Wpage = new WidgetPage();
	var mainPage = new mainModule();
		
	it('Pre-requisite (1) : Check if App is installed or not on Facebook and if installed Remove it ', function() {
		var fbsession = new fbSession();
		fbPage.inputFbId();
		fbPage.inputFbPass();
		fbPage.clickOnLoginBtn();
		fbPage.fbSettingsTab();
		fbPage.seeMoreSettingsTab();
		browser.driver.sleep(2000);
		fbPage.userApps();
		browser.driver.sleep(2000);
		
		fbPage.checkAppAlreadyInstalledOrNot('tripcierge').then(function(value){
			console.log("[Info] : Size of App list element:- "+value);
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
					Wpage.switchToWidgetFrame().then(function(){
					var wP = new WidgetPage();
					wP.installAppThroughMiniShareModule();
					expect(wP.verifySendInvitationButton()).toBe(true);
				});
				}else{
					console.log("[Info] : App should not be installed for the scenario but actually it's there, un-installing it now");
					fbPage.appRemove("tripcierge");
   					fbPage.removeNow();		 
					browser.driver.sleep(2000);
				}
			}
		});
	});
	
	it('Pre-requisite (2) : Already Logged in and Unattending from the event if already Joined', function (){
		var fbeventsession = new fbEventSession();
		expect(fbPage.verifyHomeTabObFb()).toBe(true);
		fbPage.checkForJoinButtonOnEventsPageAndRemoveUserIfJoinedAlready();
	});

	it('STEP (1) : Navigate to ROKT widget home page', function() {
		var session = new browserSession();
		
	});

	it('STEP (2) : Verify Widget Overlay', function() {
		expect(Wpage.widgetFrame.isDisplayed()).toBe(true);
		Wpage.switchToWidgetFrame();
		expect(Wpage.getVisibiltyOfWidgetOverlay()).toBe(true);
	});

	it('STEP (3) : Accepts Terms And Conditions and Continue', function() {
		mainPage.clickCheckbBox();
		expect(mainPage.verifyContBtn()).toBe(true);
		mainPage.clickContBtn();
	});

	it('STEP (4) : Verify offers section and Skip all available Offers', function() {
		expect(mainPage.verifyOffer()).toBe(true);
		mainPage.skipOffers();	
	});

	it('STEP (5) : Verify Attending button and Click on it', function() {
		expect(mainPage.verifyMainAttendButton()).toBe(true);
		mainPage.clickOnMainAttendButton();
	});

	it('STEP (6) : Verify Send Invitation Button and Click on it', function() {
		browser.driver.sleep(3000);
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

	it('STEP (9) : Verify "Go To My Ticketmaster" link and Close the widget', function() {
		Wpage.switchToWidgetFrame();
		expect(mainPage.verifyContinueShareButton()).toBe(true);
		mainPage.clickOnContBtnFromEndWidgetPage();
		expect(Wpage.verifyLinkToTicketmaster()).toBe(true);
		Wpage.clickOnClose();
	});

	it('STEP (10) : Navigate to facebook event page', function() {
		var fbeventsession = new fbEventSession();
	});

	it('STEP (11) : Verify that user is able to join the event' ,function (){
		fbPage.clickJoinPage();
		expect(fbPage.eventStatus()).toBe(true);
		expect(fbPage.userEventStatus()).toBe(true);
	});

	it('STEP (12) : Logout from facebook', function() {
		fbPage.logoutTab();
		fbPage.logoutBtn();
	});

	it('STEP (13) : Login on facebook as the friend with whom event invitation is shared', function() {
		browser.driver.sleep(3000);
		fbPage.inputFrndFbId();
		fbPage.inputFbPass();
		fbPage.clickOnLoginBtn();
		browser.driver.sleep(3000);
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

