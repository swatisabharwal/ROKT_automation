var WidgetPage = require('../pageObjects/WidgetPageObject.js');
var browserSession = require('../sessionInitiator/browserSession.js');
var mainModule = require('../pageObjects/mainSocialShareModuleObject.js');
var faceBookPageObject = require('../pageObjects/faceBookPageObject.js');
var fbSession = require('../sessionInitiator/fbSession.js');
var fbEventSession = require('../sessionInitiator/fbEventSession.js');



var doWeNeedAppInstalled = false;
var isAppInstalled;


 describe('ROKT Widget Demo Test Using Protractor -- File: testMainSocialShareModuleWhenUserIsNotLoggedInAndAppNotInstalled', function () {
	 
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
				 
	it('3. Verify iFrame and switch to it', function () {	
		var session = new browserSession();
		browser.driver.sleep(5000);   
		expect(Wpage.widgetFrame.isDisplayed()).toBe(true);
		Wpage.switchToWidgetFrame().then(function () {
	    console.log("User successfully switched to widget iFrame");
		});

	});


  	it('4. Verify widget Overlay appears', function () {
  		expect(Wpage.getVisibiltyOfWidgetOverlay()).toBe(true);
  		console.log("Widget Overlay is correctly displayed");
  
	});
	
	
	it('5. Click on agreement checkbox' , function () {
  		mainPage.clickCheckbBox().then(function () {
					console.log('Checked on CheckBox');
		});	

	});

	it('6. Verify and click on continue' , function () {
		expect(mainPage.verifyContBtn()).toBe(true);
		console.log("Continue button is available");
		mainPage.clickContBtn().then (function () {
		console.log("clicked on continue button");	
		});

	});
	
	it('7. Verify offers',function(){
		browser.driver.sleep(2000);
		expect(mainPage.verifyOffer()).toBe(true);
	});
	
 	it('8. Skip all the offers',function(){
		browser.driver.sleep(2000);
		expect(mainPage.skipOffers()).toBe(true);
	});
	
	it('8. Verify and Click on Attending button', function (){
 		browser.driver.sleep(5000);
		expect(mainPage.verifyMainAttendButton()).toBe(true);
		browser.driver.sleep(5000);
		console.log("Attend Button verified");
		mainPage.clickOnMainAttendButton().then(function () {
		browser.driver.sleep(5000);
		console.log("Attend button is clicked");
		});
	});
	
	   
	it('5. Handling Fb Window ', function () {
		Wpage.fbWindowHandler();
        browser.driver.sleep(5000);   
		console.log("FaceBook Window is handled");

	});    
	
	it('11. Entering Fb Credentials ', function () {
		Wpage.inputFbId();
        browser.driver.sleep(5000);   
		Wpage.inputFbPass();
        browser.driver.sleep(5000);   
		Wpage.clickOnFbLoginBtn();
        browser.driver.sleep(5000);   
		console.log("LoggedIn into FaceBook");

	});
	
	it('changing app accessebility', function (){
	    console.log('changing user info');
		Wpage.editAppInfo();
        browser.driver.sleep(5000);   
	    Wpage.editAppFrndOptn();
        browser.driver.sleep(5000);   

	});
	
	it('Installing ticketmaster application', function (){
		expect(Wpage.verifyInstallationPage()).toBe(true);
		Wpage.clickOkayToInstall();
	});
	
    it('8. Verify and Click on Attending button', function (){
		Wpage.switchToWidgetFrame();  
		browser.driver.sleep(5000);
		expect(mainPage.verifyMainAttendButton()).toBe(true);
		browser.driver.sleep(5000);
		console.log("Attend Button verified");
		mainPage.clickOnMainAttendButton().then(function () {
		 browser.driver.sleep(5000);
		 console.log("Attend button is clicked");
		});
	});
	
	it('12. Verifying Send Invitation Button ', function () {
		console.log('verifying invitation btn');
		browser.driver.sleep(5000);   
		Wpage.switchToWidgetFrame();
		expect(Wpage.verifySendInvitationButton()).toBe(true);
        browser.driver.sleep(5000);   
		console.log("Send Invitation Button Verified");	

	});
	   
	  
	
	it('13. Verifying Send Invitation Button and click on it', function () {
		console.log('verifying invitation btn');
		browser.driver.sleep(5000);   
		expect(Wpage.verifySendInvitationButton()).toBe(true);
        browser.driver.sleep(5000);   
		console.log("Send Invitation Button Verified");
		Wpage.sendInvitationButtonClick();
		console.log("sendInvitation button is clicked");
	});
	
	it('12. Verifying that the Window Contains link to ticketmaster event', function() {
		Wpage.switchToSendInvitationFrames();
		browser.driver.sleep(5000);
		expect(Wpage.verifyPostOverlay()).toBe(true);
		console.log("Window is verified");
	});

	it('13. Entering the friend name to share this event with', function() {
		Wpage.enterRecepient();
		browser.driver.sleep(5000);
		console.log("Friend is selected");
		Wpage.clickOnSend();
		browser.driver.sleep(5000);
		console.log("Message is send");

	});

	it('10. Verify and Click on Continue button on end widget page of', function() {
		browser.driver.sleep(5000);
		Wpage.switchToWidgetFrame().then(function() {
			console.log("User successfully switched to widget iFrame");
		});
		expect(mainPage.verifyContinueShareButton()).toBe(true);
		mainPage.clickOnContBtnFromEndWidgetPage();
	});

	it('15. Verifying that the page contains link to ticket master', function() {
		browser.driver.sleep(5000);
		expect(Wpage.verifyLinkToTicketmaster()).toBe(true);
		console.log("Ticketmaster link verified");
	});

	it('16. clicking on close', function() {
		browser.driver.sleep(5000);
		Wpage.clickOnClose().then(function() {
		console.log("clicking on close");
		});
	});
	
    it('20. Joining the event page', function () {
			var fbeventsession=new fbEventSession();
			fbPage.clickJoinPage();
			browser.driver.sleep(5000);
			expect(fbPage.eventStatus()).toBe(true);
			browser.driver.sleep(5000);
			console.log("joining the event page");
			browser.driver.sleep(5000);
			expect(fbPage.userEventStatus()).toBe(true);
			console.log("user going to event");
		
    });
		
		it('Logging out' ,function (){
		fbPage.logoutTab();
		browser.driver.sleep(5000);   

		fbPage.logoutBtn();

		browser.driver.sleep(5000);   


	});
	it('21. login with friend Id',function () {
	    	
		browser.driver.sleep(5000); 
		fbPage.inputFrndFbId();
		browser.driver.sleep(2000);
		fbPage.inputFbPass();
		browser.driver.sleep(2000);
		fbPage.clickOnLoginBtn();
		browser.driver.sleep(10000);
	});
	
	it('Verifying message received',function(){
	   	console.log("verifying message");
		fbPage.clickMessages();
		browser.driver.sleep(5000);
		fbPage.selectSender();
		browser.driver.sleep(5000);
		expect(fbPage.verifyMessage()).toBe(true);
	});
	
	it('Removing Mesage', function () {
		console.log("removing msg");
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

