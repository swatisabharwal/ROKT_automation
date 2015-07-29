  var fbSession = require('../sessionInitiator/fbSession.js');
  var fbAuthentication = require('../pageObjects/fbAuthenticationPage.js');
  var WidgetPage = require('../pageObjects/WidgetPageObject.js');
  var browserSession = require('../sessionInitiator/browserSession.js');


  describe('FaceBook Automation --  testMiniModuleWhenUserIsAlreadyLoggedIn ', function () {
   var fbsession= new fbSession();
   var fbAuthPage= new fbAuthentication();
   var Wpage = new WidgetPage();

   it('1. fb login ' , function () {
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

    it('2. Verify iFrame and switch to it', function () {	
        var session = new browserSession();
    	browser.driver.sleep(5000);   
		expect(Wpage.widgetFrame.isDisplayed()).toBe(true);
		Wpage.switchToWidgetFrame();
		console.log("User successfully switched to widget iFrame");

	});


  	it('3. Verify widget Overlay appears', function () {
  		expect(Wpage.getVisibiltyOfWidgetOverlay()).toBe(true);
  		console.log("Widget Overlay is correctly displayed");
  
	});	   
	   
	 it('4. Verify that user is already Logged In', function () {
  		Wpage.verifySendInvitationButton().then( function (){
						console.log("user already logged in");

	  });	 
	});	 
	
	it('5. Click and verify post' , function () {
		Wpage.sendInvitationButtonClick();
			 console.log("Send Invitation Button clicked");
		
		//Wpage.fbWindowHandler();
			console.log("moved to pop_upWindow");
		
		//expect(Wpage.verifyPostOverlay()).toBe(true);
	});    
 });  
