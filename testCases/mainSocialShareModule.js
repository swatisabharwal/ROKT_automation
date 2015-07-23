var WidgetPage = require('../pageObjects/WidgetPageObject.js');
var browserSession = require('../sessionInitiator/browserSession.js');
var mainModule = require('../pageObjects/mainSocialShareModuleObject.js');

 describe('ROKT Widget Demo Test Using Protractor -- ', function () {
  var session = new browserSession();
  var Wpage = new WidgetPage();
  var mainPage = new mainModule();
		
	it('1. Verify iFrame and switch to it', function () {	
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
	
 	it('5. Skip all the offers',function(){
		browser.driver.sleep(10000);
		while(mainPage.verifyOffer()){
			mainPage.skip_btn.click();
		}
		//mainPage.skipOffers();
	});
});