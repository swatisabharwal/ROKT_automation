var WidgetPage         = require('../pageObjects/WidgetPageObject.js');
var mainModule         = require('../pageObjects/mainSocialShareModuleObject.js');
var faceBookPageObject = require('../pageObjects/faceBookPageObject.js');




var doWeNeedAppInstalled = true;
var isAppInstalled;


 describe('ROKT Widget Demo Test Using Protractor -- File:: testMainSocialShareModuleWhenUserNotLoggedInAndAppInstalled', function () {
 
    var Wpage = new WidgetPage();
    var mainPage = new mainModule();
    var fbPage = new faceBookPageObject();

    it('Pre-requisite (1) : Check if App is installed or not on Facebookand if installed Remove it', function() {
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
				
		fbPage.checkAppAlreadyInstalledOrNot(dataObject.url.fbUrl).then(function(value){
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
					browser.driver.sleep(5000);
					Wpage.switchToWidgetFrame().then(function(){
					var wP = new WidgetPage();
					browser.driver.sleep(5000);
					wP.installAppThroughMiniShareModule();
					expect(wP.verifySendInvitationButton()).toBe(true);
			});
				}else{
					console.log("[INFO] : App should not be installed for the scenario but actually it's there, un-installing it now");
					fbPage.appRemove(dataObject.app);
					browser.driver.sleep(5000);
					fbPage.removeNow();		 
					browser.driver.sleep(5000);
				}
			}
		});
	});
	
	it('Pre-requisite (2) : Logging out from facebook and Unattending the event if Joined', function() {
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

  	it('STEP (3) : Accepts Terms And Conditions and Continue', function() {
		browser.driver.sleep(5000);
		mainPage.clickCheckbBox();
		browser.driver.sleep(5000);
		expect(mainPage.verifyContBtn()).toBe(true);
		browser.driver.sleep(5000);
		mainPage.clickContBtn();
	});
		
	it('STEP (4) : Verify offers section and Skip all available Offers',function(){
		browser.driver.sleep(5000);
		expect(mainPage.verifyOffer()).toBe(true);
		browser.driver.sleep(5000);
		expect(mainPage.skipOffers()).toBe(true);
	});
		
	it('STEP (5) : Verify Attending button and Click on it', function() {
		browser.driver.sleep(5000);
		expect(mainPage.verifyMainAttendButton()).toBe(true);
		browser.driver.sleep(5000);
		mainPage.clickOnMainAttendButton();
	});
	
	it('STEP (6) : Entering UserId and Password into facebook PopUp window ', function () {
		Wpage.fbWindowHandler();
    	browser.driver.sleep(5000);
		Wpage.inputFbId();
    	Wpage.inputFbPass();
    	Wpage.clickOnLoginBtn();
     
	});
	
	it('STEP (7) : Share post on facebook ', function (){
   		browser.driver.sleep(5000);
		Wpage.switchToWidgetFrame();
		browser.driver.sleep(5000);
		Wpage.switchToSendInvitationFrames();
		browser.driver.sleep(5000);
        Wpage.postMessage();
		browser.driver.sleep(5000);
		Wpage.clickPostSend();
	});
	
	it('STEP (8) : Verifying Send Invitation Button and click on it', function() {
		browser.driver.sleep(5000);
		Wpage.switchToWidgetFrame();
		expect(Wpage.verifySendInvitationButton()).toBe(true);
		browser.driver.sleep(5000);
		Wpage.sendInvitationButtonClick();
	});

	it('STEP (9) : Verifying that the Window Contains link to ticketmaster event', function() {
		browser.driver.sleep(5000);
		Wpage.switchToSendInvitationFrames();
		browser.driver.sleep(5000);
		expect(Wpage.verifyPostOverlay()).toBe(true);	
		expect(Wpage.verifyWindowEvent()).toBe(true);
	});

	it('STEP (10) : Enter friend name to share this event with on "Send a Message" window', function() {
		browser.driver.sleep(5000);
		Wpage.enterRecepient();
		browser.driver.sleep(5000);
		expect(Wpage.verifyWindowEvent()).toBe(true);
		browser.driver.sleep(5000);
		Wpage.clickOnSend();
	});

	it('STEP (11) : Like button is clicked on main social share module', function() {
		browser.driver.sleep(5000);
		Wpage.switchToWidgetFrame();
        browser.driver.sleep(5000);
		Wpage.switchToWidgetLikeBtnFrame();
		browser.driver.sleep(5000);
		Wpage.clickLikeBtn();
	});
	
	it('STEP (12) : Verify and Click on Continue button on end widget page', function() {
		browser.driver.sleep(5000);
		Wpage.switchToWidgetFrame();
		browser.driver.sleep(5000);
		expect(mainPage.verifyContinueShareButton()).toBe(true);
		browser.driver.sleep(5000);
		mainPage.clickOnContBtnFromEndWidgetPage();
	});

	it('STEP (13) : Verify "Go To My Ticketmaster" link and Close the widget', function() {
		browser.driver.sleep(5000);
		expect(Wpage.verifyLinkToTicketmaster()).toBe(true);
		browser.driver.sleep(5000);
		Wpage.clickOnClose();
	});
	
	it('STEP (14) : Navigate to facebook event page', function() {
		var ssession = new singleSession(dataObject.url.fbEventUrl);
	});	
	
    it('STEP (15) : Verify that user is able to join the event', function () {
		browser.driver.sleep(5000);
		expect(fbPage.eventStatus()).toBe(true);
		browser.driver.sleep(5000);
		expect(fbPage.userEventStatus()).toBe(true);
    });
			
	it('STEP (17): Verify the event post on user profile',function(){
		fbPage.clickOnUserPorifleTab();
		browser.driver.sleep(5000);
		expect(fbPage.verifyFbPostMessage()).toBe(true);
		browser.driver.sleep(5000);
		fbPage.clickOnFbPostOptionTab();
    	browser.driver.sleep(5000);
		fbPage.clickOnFbPostDeleteTab();
    	browser.driver.sleep(5000);
		fbPage.clickOnFbPostDeleteNowButton();

	});
	
	it('STEP (18) : Verify that user is able to Like the event ', function (){
		var ssession = new singleSession(dataObject.url.ticketmasterUrl);
		browser.driver.sleep(5000);
		fbPage.verifyTicketmasterFbPageLikeBtnStatus();
		browser.driver.sleep(5000);
		fbPage.clickToUnlike();
	});

		
	it('STEP (19) : Logout from facebook', function (){
		browser.driver.sleep(5000);
		fbPage.logoutTab();
		browser.driver.sleep(5000);
		fbPage.logoutBtn();
	});

	it('STEP (20) : Login on facebook as the friend with whom event invitation is shared',function () {
    	browser.driver.sleep(5000);
		fbPage.inputFrndFbId();
		fbPage.inputFbPass();
		fbPage.clickOnLoginBtn();
        browser.driver.sleep(5000);	
	});
	
	it('STEP (21) : Verify if message is received by that friend',function(){
	   	browser.driver.sleep(5000);
		fbPage.clickMessages();
		browser.driver.sleep(5000);
		fbPage.selectSender();
		browser.driver.sleep(5000);
		expect(fbPage.verifyMessage()).toBe(true);
	});
	
	it('STEP (22) : Remove Message from friend message box and log out', function () {
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