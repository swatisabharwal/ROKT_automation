var WidgetPage = require('../pageObjects/WidgetPageObject.js');
var browserSession = require('../sessionInitiator/browserSession.js');
var mainModule = require('../pageObjects/mainSocialShareModuleObject.js');
var faceBookPageObject = require('../pageObjects/faceBookPageObject.js');
var fbSession = require('../sessionInitiator/fbSession.js');
var fbEventSession = require('../sessionInitiator/fbEventSession.js');


var doWeNeedAppInstalled = false;
var isAppInstalled;


describe('ROKT Widget Demo Test Using Protractor -- File: testMainSocialShareModuleWhenUserIsAlreadyLoggedInAndAppNotInstalled', function() {

	var fbPage = new faceBookPageObject();
	var Wpage = new WidgetPage();
	var mainPage = new mainModule();


		it('Pre-requisite : Check if App is installed or not on Facebook and  Remove the user from event attendance list if already joined', function() {
		var fbsession = new fbSession();
		fbPage.inputFbId();
		fbPage.inputFbPass();
		fbPage.clickOnLoginBtn();
		browser.driver.sleep(6000);
		fbPage.fbSettingsTab();
		browser.driver.sleep(2000);   
		fbPage.seeMoreSettingsTab();
		browser.driver.sleep(2000);   
		fbPage.userApps();
		browser.driver.sleep(2000); 

		fbPage.checkAppAlreadyInstalledOrNot('tripcierge').then(function(value){
			console.log("Size of App list element:- "+value);
			
			if(value === 0 ){
				isAppInstalled = false;
			}else{
				isAppInstalled = true;
			}
			
			if(isAppInstalled === doWeNeedAppInstalled){
				console.log("App is already in required state, no need to change");
			}else{
				if(doWeNeedAppInstalled){
					console.log("App should be installed for the scenario but actually it's not, installing it now");
					var session = new browserSession();
					browser.driver.sleep(5000);
		
					Wpage.switchToWidgetFrame().then(function(){
						
					var wP = new WidgetPage();
					wP.installAppThroughMiniShareModule();
					expect(wP.verifySendInvitationButton()).toBe(true);
					
				});
						
				}else{
					console.log("App should not be installed for the scenario but actually it's there, un-installing it now");
					fbPage.appRemove();
					browser.driver.sleep(5000);   
					fbPage.removeNow();		 
					browser.driver.sleep(2000);
				}
			}
		});
		
		var fbeventsession = new fbEventSession();
		browser.driver.sleep(6000);
		expect(fbPage.verifyHomeTabObFb()).toBe(true);
		fbPage.checkForJoinButtonOnEventsPageAndRemoveUserIfJoinedAlready();
	});



	it('1. Verify inner frame and switch to it', function() {
		var session = new browserSession();
		browser.driver.sleep(5000);
		expect(Wpage.widgetFrame.isDisplayed()).toBe(true);
		Wpage.switchToWidgetFrame().then(function() {
		});

	});

	it('2. Verify widget Overlay appears', function() {
		expect(Wpage.getVisibiltyOfWidgetOverlay()).toBe(true);

	});

	it('3. Click on agreement checkbox', function() {
		mainPage.clickCheckbBox().then(function() {

		});
	});

	it('4. Verify and click on continue on widget front page ', function() {
		expect(mainPage.verifyContBtn()).toBe(true);
		mainPage.clickContBtn();
	});

	it('5. Verify offers', function() {
		browser.driver.sleep(2000);
		expect(mainPage.verifyOffer()).toBe(true);
	});

	it('6. Skip all the offers', function() {
		browser.driver.sleep(2000);
		expect(mainPage.skipOffers()).toBe(true);
	});

	it('7. Verify and Click on Attending button', function() {
		browser.driver.sleep(5000);
		expect(mainPage.verifyMainAttendButton()).toBe(true);
		browser.driver.sleep(5000);
		mainPage.clickOnMainAttendButton().then(function() {
		browser.driver.sleep(5000);

		});
	});
	
	it('8. Handling Fb Window ', function () {
		Wpage.fbWindowHandler();
        browser.driver.sleep(5000);   
	});    
	
	it('9. Installing ticketmaster application', function (){
		expect(Wpage.verifyInstallationPage()).toBe(true);
		Wpage.clickOkayToInstall();
	});

    it('10. Verify and Click on Attending button', function() {
		Wpage.switchToWidgetFrame();
		browser.driver.sleep(5000);
		expect(mainPage.verifyMainAttendButton()).toBe(true);
		browser.driver.sleep(5000);
		 mainPage.clickOnMainAttendButton().then(function() {
		 browser.driver.sleep(5000);
		 });
	});
	
	it('11. Verifying Send Invitation Button and click on it', function() {
		console.log('verifying invitation btn');
		browser.driver.sleep(5000);
		expect(Wpage.verifySendInvitationButton()).toBe(true);
		browser.driver.sleep(5000);
		Wpage.sendInvitationButtonClick();

	});

	it('12. Verify that the Window Contains link to ticketmaster event', function() {
		Wpage.switchToSendInvitationFrames();
		browser.driver.sleep(5000);
		expect(Wpage.verifyPostOverlay()).toBe(true);
	});

	it('13. Enter the friend name to share this event with', function() {
		Wpage.enterRecepient();
		browser.driver.sleep(5000);
		Wpage.clickOnSend();

	});

	it('14. Verify and Click on Continue button on end widget page of', function() {
		browser.driver.sleep(5000);
		Wpage.switchToWidgetFrame();
		expect(mainPage.verifyContinueShareButton()).toBe(true);
		mainPage.clickOnContBtnFromEndWidgetPage();
	});

	it('15. Verify that the page contains link to ticket master', function() {
		browser.driver.sleep(5000);
		expect(Wpage.verifyLinkToTicketmaster()).toBe(true);
	});

	it('16. click on close', function() {
		browser.driver.sleep(5000);
		Wpage.clickOnClose();
	});

	it('17. Join the event page', function() {

		var fbeventsession = new fbEventSession();
		fbPage.clickJoinPage();
		browser.driver.sleep(5000);
		expect(fbPage.eventStatus()).toBe(true);
		expect(fbPage.userEventStatus()).toBe(true);

	});

	it('18. Logout from the current user', function() {
		fbPage.logoutTab();
		fbPage.logoutBtn();
		browser.driver.sleep(5000);
	});

	it('19. login with friend Id', function() {
		browser.driver.sleep(5000);
		fbPage.inputFbId();
		browser.driver.sleep(2000);
		fbPage.inputFbPass();
		browser.driver.sleep(2000);
		fbPage.clickOnLoginBtn();
	});

	it('20. Verify message is received by friend user', function() {
		fbPage.clickMessages();
		browser.driver.sleep(2000);
		fbPage.selectSender();
		browser.driver.sleep(2000);
		expect(fbPage.verifyMessage()).toBe(true);
	});

	it('21. Remove Message and log out', function() {
		browser.driver.sleep(2000);
		fbPage.messageSettings();
		browser.driver.sleep(2000);
		fbPage.clearMessages();
		browser.driver.sleep(2000);
		fbPage.clearConversation();
	});
	
	it('22. logging out', function() {
	   fbPage.logoutTab();
		browser.driver.sleep(5000);
		fbPage.logoutBtn();
		browser.driver.sleep(5000);

	});
	
	it('23. Close Driver',function(){
		browser.driver.close();
	});
});

