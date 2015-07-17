var session = require("../sessionInitiator/browserSession");
var widgetPage = require ("../pageObjects/widgetPageObject");

describe('Protractor Demo App', function() {
  // beforeAll(function() {
    // session.create();
     // isAngularSite(true);
  // });

  it('Launch Browser',function(){
  	 session.create();
   	 browser.ignoreSynchronization = true;
  });
  
  it('switchToWidgetFrame', function() {
  	console.log("this is 1 it ");
  	 	
  	  widgetPage.switchToWidgetFrame();

  });
  
   it('should verify overlay', function() {
   	console.log("this is 2 it ");
   	widgetPage.verifyWidgetOverlay();
  });
   
   it('Should verify Share on facebook label',function(){
   		console.log("this is 3 it ");
   		widgetPage.verifyShareFacebboklabel();
   });
   
   it('Clicking on attend button',function(){
   	console.log("this is 4 it ");
   	widgetPage.clickOnAttendingButton();
  });
   
   /*it('should click attend button', function() {

  	widgetPage.switchToWidgetFrame();
  	widgetPage.verifyWidgetOverlay();
  	widgetPage.clickOnAttendingButton();


  });*/

  
});

// 
// var session = require("../sessionInitiator/browserSession");
// var widgetPage = require ("../pageobjects/widgetPageObject");
// var myBrowser;
// 
// describe('angularjs homepage todo list test', function() {
	// beforeEach(function() {
		// session.create();
	// });
// 	
// 	
	// it('1. should add a todo', function() {
		// element(by.css('input:nth-child(1)')).sendKeys('100');
		// console.log("rewfre");
		// browser.driver.sleep(5000);
		// console.log("rewfre");
		// //widgetPage.firstMethod();
	// //	widgetPage.isWidgetFrameAvailable();
		// //widgetPage.switchToWidgetFrame(myBrowser); 
		// //widgetPage.verifyWidgetOverlay();
		// //widgetPage.clickOnAttendingButton(myBrowser);
// 		
	// //  browser.driver.switchTo().frame(browser.driver.findElement(by.css('.wdHolder>iframe'))).then(function() {//Switch to Widget
            // // console.log(">>switching to frame");
            // // browser.sleep(20000);
// //            
            // //verifying the Widget
     		 // // browser.driver.findElement(by.css('.ui_smartsignup.ui_module.tween_opacity')).isDisplayed().then(function (isVisible){
                    // // if (isVisible) {
                                   // // console.log(">>button is visible");
	   								// // //Clicking on Attending to open fb page
// //            
						         	 // // browser.driver.findElement(by.css('#ux_smartSignup_facebook_event_message_inner_buttons_attending')).click().then(function(){			        
						                                   // // browser.sleep(20000);	
						                                   // // console.log(">>clicked on attending button");
										  				   // // browser.sleep(20000);
					    			 // // });
// // 
                                 // // }                    
		     	  // // else {
                     // // console.log("not visible");
                    // // }});
//            
//           
// //                     
           // // browser.driver.getAllWindowHandles().then( function (handles){
                       // // popuphandles=handles[1];
                       // // parenthandles=handles[0];
                       // // console.log(">>handling windows");
                       // // browser.sleep(20000);
                       // // console.log(">>moving on  fb page");
// // 		      
		      		  // // browser.driver.switchTo().window(popuphandles).then(function (){// switching to fb window
                      // // browser.sleep(20000);  
		       		  // // console.log("********moved to fb page********");               
// // 		     
          		  // // });      	
    // //		 });
// 	
// 	
		// //});
// 
	// }); //it
// 	
// });//describe
//  