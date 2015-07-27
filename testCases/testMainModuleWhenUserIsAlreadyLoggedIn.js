var WidgetPage = require('../pageObjects/WidgetPageObject.js');
var browserSession = require('../sessionInitiator/browserSession.js');
var mainModule = require('../pageObjects/mainSocialShareModuleObject.js');
var fbAuthentication = require('../pageObjects/fbAuthenticationPage.js');
var fbSession = require('../sessionInitiator/fbSession.js');

 describe('ROKT Widget Demo Test Using Protractor -- File: testMainModuleWhenUserIsAlreadyLoggedIn', function () {
	 
	 var fbAuthPage= new fbAuthentication();
	 var Wpage = new WidgetPage();
	 var mainPage = new mainModule();
   
   it('fb login ' , function () {
   		var fbsession= new fbSession();
   		fbAuthPage.inputFbId();
		console.log("email into FaceBook");
		browser.driver.sleep(5000);

		fbAuthPage.inputFbPass();
		console.log("pass into FaceBook");
		browser.driver.sleep(5000);

		fbAuthPage.clickOnLoginBtn();
		console.log("LoggedIn into FaceBook");
		browser.driver.sleep(5000);
       // browser.driver.quit(); 		
	   });
	   
		 
			 
	it('1. Verify iFrame and switch to it', function () {	
		var session = new browserSession();
		browser.driver.sleep(5000);   
		expect(Wpage.widgetFrame.isDisplayed()).toBe(true);
		Wpage.switchToWidgetFrame();
		console.log("User successfully switched to widget iFrame");

	});


  	it('2. Verify widget Overlay appears', function () {
  		expect(Wpage.getVisibiltyOfWidgetOverlay()).toBe(true);
  		console.log("Widget Overlay is correctly displayed");
  
	});
	
	
	it('3. Click on agreement checkbox' , function () {
  		mainPage.clickCheckbBox();	
		console.log('Checked on CheckBox');

	});

	it('4. Verify and click on continue' , function () {
		expect(mainPage.verifyContBtn()).toBe(true);
		console.log("Continue button is available");
		mainPage.clickContBtn();
		console.log("clicked on continue button");	

	});
	
	it('5. Verify offers',function(){
		browser.driver.sleep(10000);
		expect(mainPage.verifyOffer()).toBe(true);
	});
	
 	it('6. Skip all the offers',function(){
		browser.driver.sleep(10000);
		expect(mainPage.skipOffers()).toBe(true);
	});
	
	
	it('9. Verifying Send Invitation Button ', function () {
		console.log('verifying invitation btn');
		browser.driver.sleep(5000);   
		expect(Wpage.verifySendInvitationButton()).toBe(true);
        browser.driver.sleep(5000);   
		console.log("Send Invitation Button Verified");	

	});
	
	it('10. Verify and Click on Continue button on end widget page of',function(){
		browser.driver.sleep(10000);
		expect(mainPage.verifyContinueShareButton()).toBe(true);
		mainPage.clickOnContBtnFromEndWidgetPage();
	});
});

