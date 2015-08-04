var WidgetPage         = require('../pageObjects/WidgetPageObject.js');
var browserSession     = require('../sessionInitiator/browserSession.js');
var mainModule         = require('../pageObjects/mainSocialShareModuleObject.js');
var faceBookPageObject = require('../pageObjects/faceBookPageObject.js');
var fbSession          = require('../sessionInitiator/fbSession.js');
var fbEventSession     = require('../sessionInitiator/fbEventSession.js');


var doWeNeedAppInstalled = false;
var isAppInstalled;


describe('ROKT Widget Demo Test Using Protractor -- File: testMaybeScenarioWhenUserIsAlreadyLoggedInAndAppNotInstalled', function() {

	var fbPage = new faceBookPageObject();
	var Wpage = new WidgetPage();
	var mainPage = new mainModule();


	it('Pre-requisite (1) : Check if App is installed or not on Facebook and if installed Remove it', function() {
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
	
    it('Pre-requisite (2) : Already Logged in and unattending the event', function (){
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
		expect(Wpage.verifyWindowEvent()).toBe(true);
	});

	it('STEP (3) : Accepts Terms And Conditions and Continue', function() {
		mainPage.clickCheckbBox().then(function() {
		expect(mainPage.verifyContBtn()).toBe(true);
		mainPage.clickContBtn();
		});
	});

	it('STEP (4) : Verify offers section and Skip all available Offers', function() {
		expect(mainPage.verifyOffer()).toBe(true);
	    expect(mainPage.skipOffers()).toBe(true);
	});

	it('STEP (5) : Verify Attending button and Click on it', function() {
		expect(mainPage.verifyMainMaybeButton()).toBe(true);
		mainPage.clickOnMainMaybeButton();
	});
	
	it('STEP (6) : Installing ticketmaster application', function (){
		Wpage.fbWindowHandler();
    	expect(Wpage.verifyInstallationPage()).toBe(true);
		Wpage.clickOkayToInstall();
	});

    it('STEP (7) : Verify and Click on Attending button', function() {
		Wpage.switchToWidgetFrame();
		expect(mainPage.verifyMainAttendButton()).toBe(true);
     	mainPage.clickOnMainAttendButton();
		
	});
	
	it('STEP (8) : Verifying Send Invitation Button and click on it', function() {
		expect(Wpage.verifySendInvitationButton()).toBe(true);
		Wpage.sendInvitationButtonClick();
	});

	it('STEP (9) : Verifying that the Window Contains link to ticketmaster event', function() {
		Wpage.switchToSendInvitationFrames();
		expect(Wpage.verifyPostOverlay()).toBe(true);
		browser.driver.sleep(2000);
     	expect(fbPage.userEventStatus()).toBe(true);
	});

	it('STEP (10) : Enter friend name to share this event with on "Send a Message" window', function() {
		Wpage.enterRecepient();
		Wpage.clickOnSend();
	});

	it('STEP (11) : Verify and Click on Continue button on the end widget page', function() {
		Wpage.switchToWidgetFrame();
    	expect(mainPage.verifyContinueShareButton()).toBe(true);
		mainPage.clickOnContBtnFromEndWidgetPage();
	});

	it('STEP (12) : Verify "Go To My Ticketmaster" link and Close the widget', function() {
		expect(Wpage.verifyLinkToTicketmaster()).toBe(true);
		Wpage.clickOnClose();
	});

	it('STEP (13) : Navigate to facebook event page', function() {
		var fbeventsession = new fbEventSession();
		
    });
	
    it('STEP (14) : Verify that user is able to join the event' ,function (){
		fbPage.clickJoinPage();
		fbPage.clickGoingStatus();
		fbPage.clickMaybeStatus();
		expect(fbPage.eventStatusMaybe()).toBe(true);
		expect(fbPage.user_event_status_maybe()).toBe(true);
	});

	it('STEP (15) : Logout from facebook', function() {
		fbPage.logoutTab();
		fbPage.logoutBtn();
		
	});

	it('STEP (16) : Login on facebook as the friend with whom event invitation is shared', function() {
		browser.driver.sleep(3000);
		fbPage.inputFrndFbId();
		fbPage.inputFbPass();
		fbPage.clickOnLoginBtn();
		browser.driver.sleep(3000);
	});

	it('STEP (17) : Verify if message is received by that friend', function() {
		fbPage.clickMessages();
		fbPage.selectSender();
		expect(fbPage.verifyMessage()).toBe(true);
	});

	it('STEP (18) : Remove Message from friend message box and log out', function() {
		fbPage.messageSettings();
		fbPage.clearMessages();
		fbPage.clearConversation();
		fbPage.logoutTab();	
		fbPage.logoutBtn();
	});

});


