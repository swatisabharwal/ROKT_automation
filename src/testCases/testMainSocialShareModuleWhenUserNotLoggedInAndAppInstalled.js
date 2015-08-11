var WidgetPage         = require('../pageObjects/WidgetPageObject.js');
var mainModule         = require('../pageObjects/mainSocialShareModuleObject.js');
var faceBookPageObject = require('../pageObjects/faceBookPageObject.js');
var singleSession      = require('../sessionInitiator/Session.js');
var dataObject         = require('../dataFile/dataObject.json');

var doWeNeedAppInstalled = true;
var isAppInstalled;


 describe('ROKT Widget Demo Test Using Protractor -- File:: testMainSocialShareModuleWhenUserNotLoggedInAndAppInstalled', function () {
 
    var Wpage = new WidgetPage();
    var mainPage = new mainModule();
    var fbPage = new faceBookPageObject();

    it('Pre-requisite (1) : Check if App is installed or not on Facebookand if installed Remove it', function() {
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
				console.log("[INFO] : App is already in required state, no need to change");
			}else{
				if(doWeNeedAppInstalled){
					console.log("[INFO] : App should be installed for the scenario but actually it's not, installing it now");
					var ssession = new singleSession(dataObject.url.AppUrl);
					Wpage.switchToWidgetFrame().then(function(){
					var wP = new WidgetPage();
					browser.driver.sleep(5000);
					wP.installAppThroughMiniShareModule();
					expect(wP.verifySendInvitationButton()).toBe(true);
			});
				}else{
					console.log("[INFO] : App should not be installed for the scenario but actually it's there, un-installing it now");
					fbPage.appRemove(dataObject.app);
						browser.driver.sleep(2000);
					fbPage.removeNow();		 
				}
			}
		});
	});
	
	it('Pre-requisite (2) : Logging out from facebook and Unattending the event if Joined', function() {
	    var ssession = new singleSession(dataObject.url.fbEventUrl);
		expect(fbPage.verifyHomeTabObFb()).toBe(true);
		fbPage.checkForJoinButtonOnEventsPageAndRemoveUserIfJoinedAlready();
		fbPage.logoutTab();
		fbPage.logoutBtn();
	});	
		
	it('STEP (1) : Navigate to ROKT widget home page', function() {
		var ssession = new singleSession(dataObject.url.AppUrl);
	});
	
	it('STEP (2) : Verify Widget Overlay', function() {
		Wpage.switchToWidgetFrame();
		expect(Wpage.getVisibiltyOfWidgetOverlay()).toBe(true);
	});

  	it('STEP (3) : Accepts Terms And Conditions and Continue', function() {
		mainPage.clickCheckbBox();
		expect(mainPage.verifyContBtn()).toBe(true);
		mainPage.clickContBtn();
	});
		
	it('STEP (4) : Verify offers section and Skip all available Offers',function(){
		expect(mainPage.verifyOffer()).toBe(true);
		expect(mainPage.skipOffers()).toBe(true);
	});
		
	it('STEP (5) : Verify Attending button and Click on it', function() {
		expect(mainPage.verifyMainAttendButton()).toBe(true);
		mainPage.clickOnMainAttendButton();
	});
	
	it('STEP (6) : Entering UserId and Password into facebook PopUp window ', function () {
		Wpage.fbWindowHandler();
		Wpage.inputFbId();
    	Wpage.inputFbPass();
    	Wpage.clickOnLoginBtn();
     
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
		expect(Wpage.verifyWindowEvent()).toBe(true);
		Wpage.clickOnSend();
	});

	it('STEP (11) : Like button is clicked on main social share module', function() {
		Wpage.switchToWidgetFrame();
        Wpage.switchToWidgetLikeBtnFrame();
		Wpage.clickLikeBtn();
	});
	
	it('STEP (12) : Verify and Click on Continue button on end widget page', function() {
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
	
    it('STEP (15) : Verify that user is able to join the event', function () {
		expect(fbPage.eventStatus()).toBe(true);
		expect(fbPage.userEventStatus()).toBe(true);
    });
			
	it('STEP (17): Verify the event post on user profile',function(){
		fbPage.clickOnUserPorifleTab();
		expect(fbPage.verifyFbPostMessage()).toBe(true);
		fbPage.clickOnFbPostOptionTab();
		fbPage.clickOnFbPostDeleteTab();
		fbPage.clickOnFbPostDeleteNowButton();

	});
	
	it('STEP (18) : Verify that user is able to Like the event ', function (){
		var ssession = new singleSession(dataObject.url.ticketmasterUrl);
		fbPage.verifyTicketmasterFbPageLikeBtnStatus();
		fbPage.clickToUnlike();
	});

		
	it('STEP (19) : Logout from facebook', function (){
		fbPage.logoutTab();
		fbPage.logoutBtn();
	});

	it('STEP (20) : Login on facebook as the friend with whom event invitation is shared',function () {
		fbPage.inputFrndFbId();
		fbPage.inputFbPass();
		fbPage.clickOnLoginBtn();
  	});
	
	it('STEP (21) : Verify if message is received by that friend',function(){
		fbPage.clickMessages();
		fbPage.selectSender();
		expect(fbPage.verifyMessage()).toBe(true);
	});
	
	it('STEP (22) : Remove Message from friend message box and log out', function () {
		fbPage.messageSettings();
		fbPage.clearMessages();
		fbPage.clearConversation();
		fbPage.logoutTab();
		fbPage.logoutBtn();
	});
	
});