require('../node_modules/protractor/node_modules/jasminewd');

 // var frameElement_Widget = browser.driver.findElement(by.css('.wdHolder>iframe'));
 // var overlay_Widget = browser.driver.findElement(by.css('.ui_smartsignup.ui_module.tween_opacity'));
 // var btn_Attending = browser.driver.findElement(by.css('#ux_smartSignup_facebook_event_message_inner_buttons_attending'));


function widgetPage(){}

widgetPage.switchToWidgetFrame = function(){
       browser.driver.sleep(15000);
       browser.driver.findElement(by.css('.wdHolder>iframe')).isDisplayed().then(function(isVisible){
	if(isVisible){
		console.log("Frame Switched");
		browser.driver.sleep(15000);
		browser.driver.switchTo().frame(browser.driver.findElement(by.css('.wdHolder>iframe')));
		console.log("Frame Switched");
	}
	else{
		console.log("Frame not switched");	
	}
	
 });
  
};

widgetPage.verifyWidgetOverlay = function(){

	browser.driver.sleep(5000);
    browser.driver.findElement(by.css('.ui_smartsignup.ui_module.tween_opacity')).isDisplayed().then(function (isVisible){
           if (isVisible) {
                console.log(">>Overlay is visible");
	   			}
	   	   
	   	   else{
	   	        console.log("not visible");
	   	   }
           	
	});
};

widgetPage.verifyShareFacebboklabel = function(){
	browser.driver.sleep(5000);
    browser.driver.findElement(by.css('.ui_smartSignup_facebook_event_message_header_text')).isDisplayed().then(function (isVisible){
           if (isVisible) {
                console.log(">>*****Share to Facebook label is present***");
                 var label_txt= browser.driver.findElement(by.css('.ui_smartSignup_facebook_event_message_header_text')).getText();
                 expect(label_txt).toEqual('Share on Facebook');
	   			}
	   	   
	   	   else{
	   	        console.log("label not visible");
	   	   }
           	
	});
};

widgetPage.clickOnAttendingButton=function(){
console.log("click");
	browser.driver.sleep(5000);
	browser.driver.findElement(by.css('#ux_smartSignup_facebook_event_message_inner_buttons_attending')).isDisplayed().then(function (isVisible){
		if(isVisible){
			console.log("Button appeard");
			browser.driver.findElement(by.css('#ux_smartSignup_facebook_event_message_inner_buttons_attending')).click();
		}
		else
		{
			console.log("Button not appearing");
			
		}

	});
};

module.exports = widgetPage;
