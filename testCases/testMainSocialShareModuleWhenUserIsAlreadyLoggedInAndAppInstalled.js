var WidgetPage = require('../pageObjects/WidgetPageObject.js');
var browserSession = require('../sessionInitiator/browserSession.js');
var mainModule = require('../pageObjects/mainSocialShareModuleObject.js');
var faceBookPageObject = require('../pageObjects/faceBookPageObject.js');
var fbSession = require('../sessionInitiator/fbSession.js');
var fbEventSession = require('../sessionInitiator/fbEventSession.js');


var doWeNeedAppInstalled = true;
var isAppInstalled;


describe('ROKT Widget Demo Test Using Protractor -- File: testMainSocialShareModuleWhenUserIsAlreadyLoggedInAndAppInstalled', function() {

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

	it('2. Navigate to ROKT widget home page', function() {
		var session = new browserSession();
		browser.driver.sleep(5000);
	});

	it('3. Verify iFrame and switch to it', function() {
		expect(Wpage.widgetFrame.isDisplayed()).toBe(true);
		Wpage.switchToWidgetFrame().then(function() {
		});

	});

	it('4. Verify widget Overlay appears', function() {
		expect(Wpage.getVisibiltyOfWidgetOverlay()).toBe(true);

	});

	it('5. Click on agreement checkbox', function() {
		mainPage.clickCheckbBox().then(function() {

		});

	});

	it('6. Verify and click on continue', function() {
		expect(mainPage.verifyContBtn()).toBe(true);
		mainPage.clickContBtn().then(function() {

		});

	});

	it('7. Verify offers section', function() {
		browser.driver.sleep(2000);
		expect(mainPage.verifyOffer()).toBe(true);
	});

	it('8. Skip all the offers', function() {
		browser.driver.sleep(2000);
		mainPage.skipOffers();	
	});

	it('9. Verify and Click on Attending button', function() {
		browser.driver.sleep(5000);
		expect(mainPage.verifyMainAttendButton()).toBe(true);
		browser.driver.sleep(5000);
		mainPage.clickOnMainAttendButton().then(function() {
		});
	});

	it('10. Verifying Send Invitation Button and click on it', function() {
		console.log('verifying invitation btn');
		browser.driver.sleep(3000);
		expect(Wpage.verifySendInvitationButton()).toBe(true);
		Wpage.sendInvitationButtonClick();

	});

	it('11. Switch to Invitaion frame', function() {
		browser.driver.sleep(5000);
		Wpage.switchToSendInvitationFrames();
		browser.driver.sleep(5000);
		expect(Wpage.verifyPostOverlay()).toBe(true);
		
		
	});

	it('12. Enter the friend name to share this event with', function() {
		
		Wpage.enterRecepient();
		browser.driver.sleep(2000);
		Wpage.clickOnSend();

	});

	it('13. Verify and Click on Continue button on end widget page of', function() {
		browser.driver.sleep(5000);
		Wpage.switchToWidgetFrame().then(function() {
			console.log("User successfully switched to widget iFrame");
		});
		expect(mainPage.verifyContinueShareButton()).toBe(true);
		mainPage.clickOnContBtnFromEndWidgetPage();
	});

	it('14. Verify that the page contains link to ticket master', function() {
		browser.driver.sleep(5000);
		expect(Wpage.verifyLinkToTicketmaster()).toBe(true);
		console.log("Ticketmaster link verified");
	});

	it('15. cClick on close button on widget', function() {
		browser.driver.sleep(5000);
		Wpage.clickOnClose().then(function() {
			console.log("clicking on close");
		});
	});

	it('16. Join the event page', function() {

		var fbeventsession = new fbEventSession();
		browser.driver.sleep(2000);
		fbPage.clickJoinPage();
		browser.driver.sleep(5000);
		expect(fbPage.eventStatus()).toBe(true);
		console.log("joining the event page");
		expect(fbPage.userEventStatus()).toBe(true);
		console.log("user going to event");

	});

	it('17. Logout from the current user', function() {
		fbPage.logoutTab();
		browser.driver.sleep(5000);
		fbPage.logoutBtn();
		browser.driver.sleep(5000);
	});

	it('18. Login with friend Id', function() {

		browser.driver.sleep(5000);
		fbPage.inputFrndFbId();
		browser.driver.sleep(2000);

		fbPage.inputFbPass();
		browser.driver.sleep(2000);

		fbPage.clickOnLoginBtn();
	});

	it('19. Verify message is received by a friend', function() {
		browser.driver.sleep(5000);
		fbPage.clickMessages();
		browser.driver.sleep(2000);

		fbPage.selectSender();
		browser.driver.sleep(2000);

		expect(fbPage.verifyMessage()).toBe(true);
	});

	it('20. Remove Message from friend\'s message box and log out', function() {

		browser.driver.sleep(2000);

		fbPage.messageSettings();
		browser.driver.sleep(2000);

		fbPage.clearMessages();
		browser.driver.sleep(2000);

		fbPage.clearConversation();
		fbPage.logoutTab();
		fbPage.logoutBtn();
	});
	
});

