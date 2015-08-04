var WidgetPage = require('../pageObjects/WidgetPageObject.js');
var browserSession = require('../sessionInitiator/browserSession.js');
var mainModule = require('../pageObjects/mainSocialShareModuleObject.js');
var faceBookPageObject = require('../pageObjects/faceBookPageObject.js');
var fbSession = require('../sessionInitiator/fbSession.js');
var fbEventSession = require('../sessionInitiator/fbEventSession.js');

var doWeNeedAppInstalled = true;
var isAppInstalled;


describe('ROKT Widget Demo Test Using Protractor -- File: testMainModuleWhenUserIsAlreadyLoggedIn', function() {

	var fbPage = new faceBookPageObject();
	var Wpage = new WidgetPage();
	var mainPage = new mainModule();

	it('1. Login in to Facebook ', function() {
		var fbsession = new fbSession();
		fbPage.inputFbId();
    	browser.driver.sleep(1000);
		fbPage.inputFbPass();
     	browser.driver.sleep(1000);
		fbPage.clickOnLoginBtn();
		browser.driver.sleep(6000);
		fbPage.fbSettingsTab();
		browser.driver.sleep(2000);   
		fbPage.seeMoreSettingsTab();
		browser.driver.sleep(2000);   
		fbPage.userApps();
		browser.driver.sleep(2000); 

		fbPage.checkAppAlreadyInstalledOrNot('tripcierge').then(function(value){
			console.log("Length of app :- "+value);
			if(value === 0 ){
				isAppInstalled = false;
			}else{
				isAppInstalled = true;
			}
			
			if(isAppInstalled === doWeNeedAppInstalled){
				console.log("App is in required state already, no need to change");
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

	});



});

