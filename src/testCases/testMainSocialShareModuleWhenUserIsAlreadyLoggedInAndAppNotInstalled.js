var WidgetPage         = require('../pageObjects/WidgetPageObject.js');
var mainModule         = require('../pageObjects/mainSocialShareModuleObject.js');
var faceBookPageObject = require('../pageObjects/faceBookPageObject.js');
var dataObject         = require('../dataFile/dataObject.json');
var singleSession      = require('../sessionInitiator/Session.js');



var doWeNeedAppInstalled = false;
var isAppInstalled;


describe('ROKT Widget Demo Test Using Protractor -- File: testMainSocialShareModuleWhenUserIsAlreadyLoggedInAndAppNotInstalled', function() {

	var fbPage = new faceBookPageObject();
	var Wpage = new WidgetPage();
	var mainPage = new mainModule();


	it('Pre-requisite (1) : Check if App is installed or not on Facebook and if installed Remove it', function() {
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
		expect(mainPage.skipOffers()).toBe(true);
	});

	it('STEP (5) : Verify Attending button and Click on it', function() {
		expect(mainPage.verifyMainAttendButton()).toBe(true);
		mainPage.clickOnMainAttendButton();
	});
	
	it('STEP (6) : Installing ticketmaster application', function (){
		Wpage.fbWindowHandler();
		expect(Wpage.verifyInstallationPage()).toBe(true);
		Wpage.clickOkay();
    	expect(Wpage.verifyManageYourEventsWindow()).toBe(true);
		Wpage.clickOkayToInstall();
	});
	
	it('STEP (7) : Share post on facebook ', function (){
		Wpage.switchToWidgetFrame();
		Wpage.switchToSendInvitationFrames();
        Wpage.postMessage();
		Wpage.clickPostSend();
	});
    
	it('STEP (8) : Verifying Send Invitation Button and click on it', function() {
		Wpage.switchToWidgetFrame();
		expect(Wpage.verifySendInvitationButton()).toBe(true);
		Wpage.sendInvitationButtonClick();
    });

	it('STEP (9) : Verifying that the Window Contains link to ticketmaster event', function() {
		Wpage.switchToSendInvitationFrames();
		expect(Wpage.verifyPostOverlay()).toBe(true);	
		expect(Wpage.verifyWindowEvent()).toBe(true);
	});

	it('STEP (10) : Enter friend name to share this event with on "Send a Message" window', function() {
		Wpage.enterRecepient();
		Wpage.clickOnSend();
	});
	
	it('STEP (11) : Like button is clicked on main social share module', function() {
		Wpage.switchToWidgetFrame();
     	Wpage.switchToWidgetLikeBtnFrame();
		Wpage.clickLikeBtn();
	});
	
	it('STEP (12) : Verify and Click on Continue button on the end widget page', function() {
		Wpage.switchToWidgetFrame();
  		expect(mainPage.verifyContinueShareButton()).toBe(true);
		mainPage.clickOnContBtnFromEndWidgetPage();
	});

	it('STEP (13) : Verify "Go To My Ticketmaster" link and Close the widget', function() {
		expect(Wpage.verifyLinkToTicketmaster()).toBe(true);
		Wpage.clickOnClose();
	});

	it('STEP (14) : Navigate to facebook event page', function() {
		var ssession = new singleSession(dataObject.url.fbEventUrl);
		
    });
	
    it('STEP (15) : Verify that user is able to join the event' ,function (){
		expect(fbPage.eventStatus()).toBe(true);
		expect(fbPage.userEventStatus()).toBe(true);
	});

	it('STEP (16): Verify the event post on user profile',function(){
		fbPage.clickOnUserPorifleTab();
		expect(fbPage.verifyTicketmasterLinkOnProfile()).toBe(true);
		expect(fbPage.verifyFbPostMessage()).toBe(true);
		fbPage.clickOnFbPostOptionTab();
		fbPage.clickOnFbPostDeleteTab();
		fbPage.clickOnFbPostDeleteNowButton();
	});
	
	it('STEP (17) : Verify that user event appears in "Liked" state', function (){
		var ssession = new singleSession(dataObject.url.ticketmasterUrl);
		expect(fbPage.verifyTicketmasterFbPageLikeBtnStatus()).toBe(true);
		fbPage.clickToUnlike();
	
	});
			
	it('STEP (18) : Logout from facebook', function() {
		fbPage.logoutTab();
		fbPage.logoutBtn();
	});

	it('STEP (19) : Login on facebook as the friend with whom event invitation is shared', function() {
		fbPage.inputFrndFbId();
		fbPage.inputFbPass();
		fbPage.clickOnLoginBtn();
	});

	it('STEP (20) : Verify if message is received by that friend', function() {
		fbPage.clickMessages();
		fbPage.selectSender();
		expect(fbPage.verifyMessage()).toBe(true);
	});

	it('STEP (21) : Remove Message from friend message box and log out', function() {
		fbPage.messageSettings();
		fbPage.clearMessages();
		fbPage.clearConversation();
		fbPage.logoutTab();	
		fbPage.logoutBtn();
	});
});


