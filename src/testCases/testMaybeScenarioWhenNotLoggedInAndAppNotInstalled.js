var WidgetPage         = require('../pageObjects/WidgetPageObject.js');
var mainModule         = require('../pageObjects/mainSocialShareModuleObject.js');
var faceBookPageObject = require('../pageObjects/faceBookPageObject.js');
var singleSession      = require('../sessionInitiator/Session.js');
var dataObject         = require('../dataFile/dataObject.json');


var doWeNeedAppInstalled = false;
var isAppInstalled;


 describe('ROKT Widget Demo Test Using Protractor -- File: testMaybeScenarioWhenNotLoggedInAndAppNotInstalled.js', function () {
	 
	var fbPage = new faceBookPageObject();
	var Wpage = new WidgetPage();
	var mainPage = new mainModule();
	 
	it('Pre-requisite (1) : Check if App is installed or not on Facebook and  Remove the user from event attendance list if already joined', function() {
		var ssession = new singleSession(dataObject.url.fbUrl);
		fbPage.inputFbId();
		fbPage.inputFbPass();
		fbPage.clickOnLoginBtn();
		fbPage.fbSettingsTab();
		fbPage.seeMoreSettingsTab();
		browser.driver.sleep(2000);
 		fbPage.userApps();
		browser.driver.sleep(2000);

		fbPage.checkAppAlreadyInstalledOrNot(dataObject.url.fbUrl).then(function(value){
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

    it('Pre-requisite (2) : Unattending the event and logging out', function (){
		var ssession = new singleSession(dataObject.url.fbEventUrl);
		browser.driver.sleep(5000);
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
	
	it('STEP (2) : Verify Widget Overlay', function () {	
		browser.driver.sleep(5000);
		expect(Wpage.widgetFrame.isDisplayed()).toBe(true);
		browser.driver.sleep(5000);
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
	
	it('STEP (5) : Verify Maybe button and Click on it ', function (){
 		browser.driver.sleep(5000);
		expect(mainPage.verifyMainMaybeButton()).toBe(true);
		browser.driver.sleep(5000);
		mainPage.clickOnMainMaybeButton();
		
	});
	
	   
	it('STEP (6) : Entering UserId and Password into facebook PopUp window ', function () {
		browser.driver.sleep(5000);
		Wpage.fbWindowHandler();
        browser.driver.sleep(5000);
		Wpage.inputFbId();
        Wpage.inputFbPass();
        Wpage.clickOnFbLoginBtn();
        browser.driver.sleep(5000);   
	});
		
	it('STEP (7) : Installing ticketmaster application', function (){
		browser.driver.sleep(5000);
		expect(Wpage.verifyInstallationPage()).toBe(true);
		browser.driver.sleep(5000);
		Wpage.clickOkay();
		browser.driver.sleep(5000);
		expect(Wpage.verifyManageYourEventsWindow()).toBe(true);
        browser.driver.sleep(5000);
		Wpage.clickOkayToInstall();
	});
	
	it('STEP (8) : Verifying Send Invitation Button and click on it', function() {
		browser.driver.sleep(5000);
		Wpage.switchToWidgetFrame();
		browser.driver.sleep(5000);
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
	
   	it('STEP (12) : Verify "Go To My Ticketmaster" link and Close the widget', function() {
		browser.driver.sleep(5000);
		Wpage.switchToWidgetFrame();
		browser.driver.sleep(5000);
		expect(mainPage.verifyContinueShareButton()).toBe(true);
		browser.driver.sleep(5000);
		mainPage.clickOnContBtnFromEndWidgetPage();
		browser.driver.sleep(5000);
		expect(Wpage.verifyLinkToTicketmaster()).toBe(true);
		browser.driver.sleep(5000);
		Wpage.clickOnClose();
	});

	it('STEP (13) : Navigate to facebook event page', function() {
		var ssession = new singleSession(dataObject.url.fbEventUrl);
		
    });		
	
	it('STEP (14) : Verify that user is able to join the event' ,function (){
		browser.driver.sleep(5000);
		expect(fbPage.eventStatusMaybe()).toBe(true);
		browser.driver.sleep(5000);
		expect(fbPage.userEventStatusMaybe()).toBe(true);
	});
	
	it('STEP (15) : Verify that user is able to Like the event ', function (){
		var ssession = new singleSession(dataObject.url.ticketmasterUrl);
		browser.driver.sleep(5000);
		expect(fbPage.verifyTicketmasterFbPageLikeBtnStatus()).toBe(true);
		browser.driver.sleep(5000);
		fbPage.clickToUnlike();
	});
	 
	it('STEP (26) : Logout from facebook', function() {
		browser.driver.sleep(5000);
		fbPage.logoutTab();
		browser.driver.sleep(5000);
		fbPage.logoutBtn();
		
	});

	it('STEP (17) : Login on facebook as the friend with whom event invitation is shared', function() {
		browser.driver.sleep(5000);
    	fbPage.inputFrndFbId();
		fbPage.inputFbPass();
		fbPage.clickOnLoginBtn();
		browser.driver.sleep(5000);

	});

	it('STEP (18) : Verify if message is received by that friend', function() {
		browser.driver.sleep(5000);
		fbPage.clickMessages();
		browser.driver.sleep(5000);
		fbPage.selectSender();
		browser.driver.sleep(5000);
		expect(fbPage.verifyMessage()).toBe(true);
	});

	it('STEP (19) : Remove Message from friend message box and log out', function() {
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
