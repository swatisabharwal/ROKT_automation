var WidgetPage         = require('../pageObjects/WidgetPageObject.js');
var browserSession     = require('../sessionInitiator/browserSession.js');
var mainModule         = require('../pageObjects/mainSocialShareModuleObject.js');
var faceBookPageObject = require('../pageObjects/faceBookPageObject.js');
var fbSession          = require('../sessionInitiator/fbSession.js');
var fbEventSession     = require('../sessionInitiator/fbEventSession.js');


var doWeNeedAppInstalled = true;
var isAppInstalled;


 describe('ROKT Widget Demo Test Using Protractor -- File:: testMaybeScenarioWhenNotLoggedInAndAppInstalled', function () {
 
    var Wpage = new WidgetPage();
    var mainPage = new mainModule();
    var fbPage = new faceBookPageObject();

    it('Pre-requisite (1) : Check if App is installed or not on Facebookand if installed Remove it', function() {
		var fbsession = new fbSession();
		fbPage.inputFbId();
		fbPage.inputFbPass();
		fbPage.clickOnLoginBtn();
		fbPage.fbSettingsTab();
		fbPage.seeMoreSettingsTab();
		browser.driver.sleep(2000);
		fbPage.userApps();
		browser.driver.sleep(2000);
 
		
		fbPage.checkAppAlreadyInstalledOrNot('Ticketmaster').then(function(value){
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
					fbPage.appRemove("Ticketmaster");
					fbPage.removeNow();		 
					browser.driver.sleep(2000);
				}
			}
		});
	});
	
	it('Pre-requisite (2) : Logging out from facebook and Unattending the event if Joined', function() {
	    var fbeventsession = new fbEventSession();
     	expect(fbPage.verifyHomeTabObFb()).toBe(true);
		fbPage.checkForJoinButtonOnEventsPageAndRemoveUserIfJoinedAlready();
		fbPage.logoutTab();
		fbPage.logoutBtn();
	});	
		
	it('STEP (1) : Navigate to ROKT widget home page', function() {
		var session = new browserSession();
	});
	
	it('STEP (2) : Verify Widget Overlay', function() {
		expect(Wpage.widgetFrame.isDisplayed()).toBe(true);
		browser.driver.sleep(2000);
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
    	browser.driver.sleep(2000);
		Wpage.switchToWidgetFrame();
		expect(Wpage.verifySendInvitationButton()).toBe(true);
		Wpage.sendInvitationButtonClick();
	});

	it('STEP (8) : Verifying that the Window Contains link to ticketmaster event', function() {
		Wpage.switchToSendInvitationFrames();
		browser.driver.sleep(3000);
		expect(Wpage.verifyPostOverlay()).toBe(true);
		expect(fbPage.verifyWindowEvent()).toBe(true);
    });

	it('STEP (9) : Enter friend name to share this event with on "Send a Message" window', function() {
		Wpage.enterRecepient();
		Wpage.clickOnSend();
	});

	it('STEP (10) : Verify and Click on Continue button on end widget page', function() {
		Wpage.switchToWidgetFrame();
		expect(mainPage.verifyContinueShareButton()).toBe(true);
		mainPage.clickOnContBtnFromEndWidgetPage();
	});

	it('STEP (11) : Verify "Go To My Ticketmaster" link and Close the widget', function() {
		expect(Wpage.verifyLinkToTicketmaster()).toBe(true);
		Wpage.clickOnClose();
	});
	
	it('STEP (12) : Navigate to facebook event page', function() {
		var fbeventsession = new fbEventSession();
	});	
	
     it('STEP (13) : Verify that user is able to join the event' ,function (){
		expect(fbPage.eventStatusMaybe()).toBe(true);
		expect(fbPage.userEventStatusMaybe()).toBe(true);
	});
	
	it('STEP (14) : Logout from facebook', function (){
		fbPage.logoutTab();
		fbPage.logoutBtn();
	});
	
	it('STEP (15) : Verify if message is received by that friend',function(){
	   	fbPage.clickMessages();
		fbPage.selectSender();
		expect(fbPage.verifyMessage()).toBe(true);
	});
	
	it('STEP (16) : Remove Message from friend message box and log out', function () {
		fbPage.messageSettings();
		fbPage.clearMessages();
		fbPage.clearConversation();
	    fbPage.logoutTab();
		fbPage.logoutBtn();
	});
	
});