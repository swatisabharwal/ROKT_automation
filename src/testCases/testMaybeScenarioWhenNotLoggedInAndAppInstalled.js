var WidgetPage         = require('../pageObjects/WidgetPageObject.js');
var mainModule         = require('../pageObjects/mainSocialShareModuleObject.js');
var faceBookPageObject = require('../pageObjects/faceBookPageObject.js');
var singleSession      = require('../sessionInitiator/Session.js');
var dataObject         = require('../dataFile/dataObject.json');


var doWeNeedAppInstalled = true;
var isAppInstalled;


 describe('ROKT Widget Demo Test Using Protractor -- File:: testMaybeScenarioWhenNotLoggedInAndAppInstalled', function () {
 
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
				console.log("[Info] : App is already in required state, no need to change");
			}else{
				if(doWeNeedAppInstalled){
					console.log("[Info] : App should be installed for the scenario but actually it's not, installing it now");
					var ssession = new singleSession(dataObject.url.AppUrl);
					Wpage.switchToWidgetFrame().then(function(){
					var wP = new WidgetPage();
					browser.driver.sleep(5000);
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
		
	it('STEP (5) : Verify Maybe button and Click on it', function () {
		expect(mainPage.verifyMainMaybeButton()).toBe(true);
		mainPage.clickOnMainMaybeButton();
    });
	
	it('STEP (6) : Entering UserId and Password into facebook PopUp window ', function () {
		Wpage.fbWindowHandler();
		Wpage.inputFbId();
    	Wpage.inputFbPass();
    	Wpage.clickOnLoginBtn();
    });
	
    
	it('STEP (7) : Verifying Send Invitation Button and click on it', function() {
		Wpage.switchToWidgetFrame();
		expect(Wpage.verifySendInvitationButton()).toBe(true);
		Wpage.sendInvitationButtonClick();
	});

	it('STEP (8) : Verifying that the Window Contains link to ticketmaster event', function() {
		Wpage.switchToSendInvitationFrames();
		expect(Wpage.verifyPostOverlay()).toBe(true);
		expect(Wpage.verifyWindowEvent()).toBe(true);
    });

	it('STEP (9) : Enter friend name to share this event with on "Send a Message" window', function() {
		Wpage.enterRecepient();
		Wpage.clickOnSend();
	});
	
	it('STEP (10) : Like button is clicked on main social share module', function() {
		Wpage.switchToWidgetFrame();
        browser.driver.sleep(5000);
		Wpage.switchToWidgetLikeBtnFrame();
		Wpage.clickLikeBtn();
	});

	
	it('STEP (11) : Verify "Go To My Ticketmaster" link and Close the widget', function() {
		Wpage.switchToWidgetFrame();
		expect(mainPage.verifyContinueShareButton()).toBe(true);
		mainPage.clickOnContBtnFromEndWidgetPage();
		expect(Wpage.verifyLinkToTicketmaster()).toBe(true);
		Wpage.clickOnClose();
	});
	
	it('STEP (12) : Navigate to facebook event page', function() {
		var ssession = new singleSession(dataObject.url.fbEventUrl);
	});	
	
     it('STEP (13) : Verify that user is able to join the event' ,function (){
		expect(fbPage.eventStatusMaybe()).toBe(true);
		expect(fbPage.userEventStatusMaybe()).toBe(true);
	});
	
	it('STEP (14) : Verify that user is able to Like the event ', function (){
		var ssession = new singleSession(dataObject.url.ticketmasterUrl);
		expect(fbPage.verifyTicketmasterFbPageLikeBtnStatus()).toBe(true);
		fbPage.clickToUnlike();
	});
	
	it('STEP (15) : Logout from facebook', function (){
		fbPage.logoutTab();
		fbPage.logoutBtn();
	});
	
	it('STEP (16) : Verify if message is received by that friend',function(){
		fbPage.clickMessages();
		fbPage.selectSender();
		expect(fbPage.verifyMessage()).toBe(true);
	});
	
	it('STEP (17) : Remove Message from friend message box and log out', function () {
		fbPage.messageSettings();
		fbPage.clearMessages();
		fbPage.clearConversation();
	    browser.driver.sleep(5000);
		fbPage.logoutTab();
		fbPage.logoutBtn();
	});
	
});