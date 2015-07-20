
var WidgetPage = function () {
	//Empty constructor for now, can add piece of code if required
};

 WidgetPage.prototype = Object.create({}, {
 	
 	// UI Objects of Widget 
    widgetFrame: { get: function () { return browser.driver.findElement(by.css('.wdHolder>iframe')); }},
    attendButton: { get: function () { return browser.driver.findElement(by.css('#ux_smartSignup_facebook_event_message_inner_buttons_attending')); }},
    widgetOverlay: { get: function () { return browser.driver.findElement(by.css('.ui_smartsignup.ui_module.tween_opacity')); }},
    shareLabel: { get: function () { return browser.driver.findElement(by.css('.ui_smartSignup_facebook_event_message_header_text')); }},
    
    
   // Methods around Object -- User actions 
    switchToWidgetFrame: {
    	 value: function () {
    	 	 return browser.driver.switchTo().frame(this.widgetFrame); 
    	 }
    },
    getVisibiltyOfWidgetOverlay: {
    	 value: function () { 
    	 	return this.widgetOverlay.isDisplayed();
    	 }
    },
    getShareLabelText: {
    	 value: function () { 
    	 	return this.shareLabel.getText(); 
    	 }
    },
    clickOnAttendButton: { 
    	value: function () { 
    		return this.attendButton.click();
    	}
    }
    

});

module.exports = WidgetPage;