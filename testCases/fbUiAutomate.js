  var fbSession = require('../sessionInitiator/fbSession.js');
  var fbAuthentication = require('../pageObjects/fbAuthenticationPage.js');

  describe('ROKT Widget Demo Test Using Protractor -- ', function () {
   var fbsession= new fbSession();
   var fbAuthPage= new fbAuthentication();
   it('fb login ' , function () {
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
 });  
