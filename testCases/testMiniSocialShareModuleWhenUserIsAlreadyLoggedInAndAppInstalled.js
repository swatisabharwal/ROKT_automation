var WidgetPage = require('../pageObjects/WidgetPageObject.js');
var browserSession = require('../sessionInitiator/browserSession.js');
var mainModule = require('../pageObjects/mainSocialShareModuleObject.js');
var faceBookPageObject = require('../pageObjects/faceBookPageObject.js');
var fbSession = require('../sessionInitiator/fbSession.js');
var fbEventSession = require('../sessionInitiator/fbEventSession.js');



var doWeNeedAppInstalled = true;
var isAppInstalled;



describe('ROKT Widget Demo Test Using Protractor -- File: testMiniSocialShareModuleWhenUserIsAlreadyLoggedInAndAppInstalled', function() {

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

	it('2. Verify if widget Overlay appears', function() {
		expect(Wpage.getVisibiltyOfWidgetOverlay()).toBe(true);

	});
	
	it('3. Verify and Click on Attending button', function() {
		browser.driver.sleep(2000);
		expect(Wpage.verifyMiniAttendButton()).toBe(true);
		browser.driver.sleep(2000);
		Wpage.clickOnMiniAttendButton().then(function() {
		browser.driver.sleep(2000);

		});
	});
		
	it('4. Verifying Send Invitation Button and click on it', function() {
		browser.driver.sleep(2000);
		expect(Wpage.verifySendInvitationButton()).toBe(true);
		browser.driver.sleep(2000);
		Wpage.sendInvitationButtonClick();

	});

	it('5. Verify that the Window Contains link to ticketmaster event', function() {
		Wpage.switchToSendInvitationFrames();
		browser.driver.sleep(2000);
		expect(Wpage.verifyPostOverlay()).toBe(true);
	});

	it('6. Enter the friend name to share this event with', function() {
		Wpage.enterRecepient();
		browser.driver.sleep(2000);
		Wpage.clickOnSend();
		browser.driver.sleep(2000);

	});
    it('7. Join the event page', function() {
		var fbeventsession = new fbEventSession();
		fbPage.clickJoinPage();
		browser.driver.sleep(5000);
		expect(fbPage.eventStatus()).toBe(true);
		expect(fbPage.userEventStatus()).toBe(true);

	});

	it('8. Logout from the current user', function() {
		fbPage.logoutTab();
		browser.driver.sleep(2000);
		fbPage.logoutBtn();
	});

	it('9. Logged in  with friend Id', function() {
		browser.driver.sleep(5000);
		fbPage.inputFrndFbId();
		browser.driver.sleep(2000);
		fbPage.inputFbPass();
		fbPage.clickOnLoginBtn();
	});

	it('10. Verify message is received by friend user', function() {
		fbPage.clickMessages();
		browser.driver.sleep(2000);
		fbPage.selectSender();
		browser.driver.sleep(2000);
		expect(fbPage.verifyMessage()).toBe(true);
	});

	it('11. Remove Message and log out', function() {
		browser.driver.sleep(2000);
		fbPage.messageSettings();
		browser.driver.sleep(2000);
		fbPage.clearMessages();
		browser.driver.sleep(2000);
		fbPage.clearConversation();
		browser.driver.sleep(2000);

	});
	
	it('12. Logout from the current user', function() {
		fbPage.logoutTab();
    	browser.driver.sleep(2000);
		fbPage.logoutBtn();
		browser.driver.sleep(5000);
	});
	
});