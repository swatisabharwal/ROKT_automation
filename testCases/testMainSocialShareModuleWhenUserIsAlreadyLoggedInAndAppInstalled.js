var WidgetPage = require('../pageObjects/WidgetPageObject.js');
var browserSession = require('../sessionInitiator/browserSession.js');
var mainModule = require('../pageObjects/mainSocialShareModuleObject.js');
var faceBookPageObject = require('../pageObjects/faceBookPageObject.js');
var fbSession = require('../sessionInitiator/fbSession.js');
var fbEventSession = require('../sessionInitiator/fbEventSession.js');

describe('ROKT Widget Demo Test Using Protractor -- File: testMainModuleWhenUserIsAlreadyLoggedIn', function() {

	var fbPage = new faceBookPageObject();
	var Wpage = new WidgetPage();
	var mainPage = new mainModule();

/*	it('1. Login in to Facebook ', function() {
		var fbsession = new fbSession();
		fbPage.inputFbId().then(function() {

		});

		fbPage.inputFbPass().then(function() {

		});

		fbPage.clickOnLoginBtn().then(function() {

		});

	});

	it('2. Verifying that user has logged in', function() {
		browser.driver.sleep(5000);
		expect(fbPage.verifyHomeTabObFb()).toBe(true);

	});

	/*it('Removing user form the event list', function() {
	 var fbeventsession = new fbEventSession();
	 Wpage.clickUndoTab();
	 browser.driver.sleep(2000);

	 Wpage.clickUndoEvent();
	 browser.driver.sleep(2000);

	 Wpage.clickUndoOk();
	 });

	it('3. Verify iFrame and switch to it', function() {
		var session = new browserSession();
		browser.driver.sleep(5000);
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

	it('7. Verify offers', function() {
		browser.driver.sleep(2000);
		expect(mainPage.verifyOffer()).toBe(true);
	});

	it('8. Skip all the offers', function() {
		browser.driver.sleep(2000);
		expect(mainPage.skipOffers()).toBe(true);
	});

	it('9. Verify and Click on Attending button', function() {
		browser.driver.sleep(5000);
		expect(Wpage.verifyMainAttendButton()).toBe(true);
		browser.driver.sleep(5000);

		Wpage.clickOnMainAttendButton().then(function() {
			browser.driver.sleep(5000);

		});
	});

	it('10. Verifying Send Invitation Button and click on it', function() {
		console.log('verifying invitation btn');
		browser.driver.sleep(5000);
		expect(Wpage.verifySendInvitationButton()).toBe(true);
		browser.driver.sleep(5000);
		Wpage.sendInvitationButtonClick();

	});

	it('11. Verify that the Window Contains link to ticketmaster event', function() {
		Wpage.switchToSendInvitationFrames();
		browser.driver.sleep(5000);
		expect(Wpage.verifyPostOverlay()).toBe(true);
	});

	it('12. Enter the friend name to share this event with', function() {
		Wpage.enterRecepient();
		browser.driver.sleep(5000);
		Wpage.clickOnSend();
		browser.driver.sleep(5000);

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

	it('15. click on close', function() {
		browser.driver.sleep(5000);
		Wpage.clickOnClose().then(function() {
			console.log("clicking on close");
		});
	});*/

	it('16. Join the event page', function() {

		var fbeventsession = new fbEventSession();
		fbPage.clickJoinPage();
		browser.driver.sleep(5000);
		expect(fbPage.eventStatus()).toBe(true);
		console.log("joining the event page");
		expect(fbPage.userEventStatus()).toBe(true);
		console.log("user going to event");

	});

	it('17. Logout from the current user', function() {
		fbPage.logoutTab();
		fbPage.logoutBtn();
		browser.driver.sleep(5000);
	});

	it('18. login with friend Id', function() {
		browser.driver.sleep(5000);
		fbPage.frndId();
		browser.driver.sleep(2000);

		fbPage.inputFbPass();
		browser.driver.sleep(2000);

		fbPage.clickOnFbLoginBtn();
	});

	it('19. Verify message is received by friend user', function() {
		fbPage.clickMessages();
		browser.driver.sleep(2000);

		fbPage.selectSender();
		browser.driver.sleep(2000);

		expect(fbPage.verifyMessage()).toBe(true);
	});

	it('20. Remove Message and log out', function() {

		browser.driver.sleep(2000);

		fbPage.messageSettings();
		browser.driver.sleep(2000);

		fbPage.clearMessages();
		browser.driver.sleep(2000);

		fbPage.clearConversation();
		fbPage.logoutBtn();
	});
});

