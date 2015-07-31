var WidgetPage = require('../pageObjects/widgetPageObject.js');
var browserSession = require('../sessionInitiator/browserSession.js');
var mainModule = require('../pageObjects/mainSocialShareModuleObject.js');
var faceBookPageObject = require('../pageObjects/faceBookPageObject.js');
var fbSession = require('../sessionInitiator/fbSession.js');
var fbEventSession = require('../sessionInitiator/fbEventSession.js');


var doWeNeedAppInstalled = false;
var isAppInstalled;



 describe('ROKT Widget Demo Test Using Protractor -- File: testMiniSocialShareModuleWhenUserNotAlreadyLoggedInAndAppNotInstalled', function () {
	 
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

   
 
	it('Logging out' ,function (){
		fbPage.logoutTab();
		browser.driver.sleep(5000);   

		fbPage.logoutBtn();

		browser.driver.sleep(5000);   


	});	
			 
	it('4. Verify iFrame and switch to it', function () {	
		var session = new browserSession();
		browser.driver.sleep(5000);   
		expect(Wpage.widgetFrame.isDisplayed()).toBe(true);
		Wpage.switchToWidgetFrame();
	});


  	it('5. Verify widget Overlay appears', function () {
  		expect(Wpage.getVisibiltyOfWidgetOverlay()).toBe(true);
 
	});
	
	
	it('10. Verify and Click on Attending button', function (){
 		browser.driver.sleep(5000);
		expect(Wpage.verifyMiniAttendButton()).toBe(true);
		browser.driver.sleep(5000);
		Wpage.clickOnMiniAttendButton();
		browser.driver.sleep(5000);
		});
	
	   
	it('11. Handling Fb Window ', function () {
		Wpage.fbWindowHandler();
        browser.driver.sleep(5000);   
	});    
	
	it('12. Entering Fb Credentials ', function () {
		Wpage.inputFbId();
        browser.driver.sleep(5000);   
		Wpage.inputFbPass();
        browser.driver.sleep(5000);   
		Wpage.clickOnFbLoginBtn();
        browser.driver.sleep(5000);   
	});
	
/*	it('changing app accessebility', function (){
		Wpage.editAppInfo();
        browser.driver.sleep(5000);   
	    Wpage.editAppFrndOptn();
        browser.driver.sleep(5000);   
	});*/
	
	it('13. Installing ticketmaster application', function (){
		expect(Wpage.verifyInstallationPage()).toBe(true);
		Wpage.clickOkayToInstall();
	});
	
    
	
	it('15. Verifying Send Invitation Button ', function () {
		browser.driver.sleep(5000);   
		Wpage.switchToWidgetFrame();
		expect(Wpage.verifySendInvitationButton()).toBe(true);
        browser.driver.sleep(5000);   
	});
	   
	  
	
	it('16. Verifying Send Invitation Button and click on it', function () {
		browser.driver.sleep(5000);   
		expect(Wpage.verifySendInvitationButton()).toBe(true);
        browser.driver.sleep(5000);   
		Wpage.sendInvitationButtonClick();
	});
	
	it('17. Verifying that the Window Contains link to ticketmaster event', function() {
		Wpage.switchToSendInvitationFrames();
		browser.driver.sleep(5000);
		expect(Wpage.verifyPostOverlay()).toBe(true);
	});

	it('18. Entering the friend name to share this event with', function() {
		Wpage.enterRecepient();
		browser.driver.sleep(5000);
		Wpage.clickOnSend();
		browser.driver.sleep(5000);
	});

	
    it('22. Joining the event page', function () {
			var fbeventsession=new fbEventSession();
			fbPage.clickJoinPage();
			browser.driver.sleep(5000);
			expect(fbPage.eventStatus()).toBe(true);
			browser.driver.sleep(5000);
			browser.driver.sleep(5000);
			expect(fbPage.userEventStatus()).toBe(true);
	
    });
		
		it('Logging out' ,function (){
		fbPage.logoutTab();
		browser.driver.sleep(5000);   
		fbPage.logoutBtn();
		browser.driver.sleep(5000);   


	});
	it('23. login with friend Id',function () {
	   	browser.driver.sleep(5000); 
		fbPage.inputFrndFbId();
		browser.driver.sleep(2000);
		fbPage.inputFbPass();
		browser.driver.sleep(2000);
		fbPage.clickOnLoginBtn();
		browser.driver.sleep(10000);
	});
	
	it('24. Verifying msg received',function(){
		fbPage.clickMessages();
		browser.driver.sleep(5000);
		fbPage.selectSender();
		browser.driver.sleep(5000);
		expect(fbPage.verifyMessage()).toBe(true);
	});
	
	it('25. Removing Mesage', function () {
		browser.driver.sleep(5000);
		fbPage.messageSettings();
		browser.driver.sleep(5000);
		fbPage.clearMessages();
		browser.driver.sleep(5000);
		fbPage.clearConversation();
		browser.driver.sleep(5000);
		
	});
	
	it('Logging out' ,function (){
		fbPage.logoutTab();
		browser.driver.sleep(5000);   

		fbPage.logoutBtn();

		browser.driver.sleep(5000);   


	});
	
});

