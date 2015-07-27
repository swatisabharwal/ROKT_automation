//var WindowHandler=require('../Utilities/WindowHandlers.js');	
var WidgetPage = function () {
	//Empty constructor for now, can add piece of code if required
//var Whandlers =new WindowHandler();
 var popup_handlers;
	    var parent_handlers;
		var handlers={};
	};
        var handl;
 WidgetPage.prototype = Object.create({}, {
 	
 	// UI Objects of Widget 
    widgetFrame: { get: function () { return browser.driver.findElement(by.css('.wdHolder>iframe')); }},
    attendButton: { get: function () { return browser.driver.findElement(by.css('#ux_smartSignup_facebook_event_message_inner_buttons_attending')); }},
    widgetOverlay: { get: function () { return browser.driver.findElement(by.css('.ui_smartsignup.ui_module.tween_opacity')); }},
    shareLabel: { get: function () { return browser.driver.findElement(by.css('.ui_smartSignup_facebook_event_message_header_text')); }},
    emailId:       { get: function () { return browser.driver.findElement(by.xpath('//div[@class="form_row clearfix"]/input[@id="email"]'));}},
    password:      { get: function () { return browser.driver.findElement(by.xpath('//div[@class="form_row clearfix"]/input[@id="pass"]'));}},
    loginBtn:      { get: function () { return browser.driver.findElement(by.xpath('//input[contains(@value,"Log In")]'));}},
	send_invitation_btn:{ get: function () { return browser.driver.findElement(by.xpath('//button[contains(text(),"Send Invitation")]'));}},   
    post_overlay: {get:function () {return browser.driver.findElement(by.css("._6l-.__c_"));}},
   
    //var Whandlers =new WindowHandler();
   // Methods around Object -- User actions 
    
	windowHandleCrnt: {
		value: function() {console.log("back to previous");
				browser.switchTo.defaultContent();
			
		}
	},
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
    },
    
    fbWindowHandler: {
	  value: function () {
    
		browser.driver.getAllWindowHandles().then( function (handles){
					 	 console.log("handling");
				    	 popup_handlers=handles[1];
                         parent_handlers=handles[0];
                         browser.driver.sleep(5000);   
                         console.log("moving to current");
                    	 browser.driver.switchTo().window(popup_handlers);});
       }      
   },
   
    inputFbId: {
        value: function () {
		return this.emailId.sendKeys("testuser01.automation@gmail.com");
        }
    },
	
    inputFbPass: {
        value: function () {
                return this.password.sendKeys("Qait@123");
       }
   },
   
    clickOnLoginBtn: {
	  value: function () {
		 this.loginBtn.click();
              	 browser.driver.switchTo().window(parent_handlers);
       }
   },     
 
 
    verifySendInvitationButton: {
	  value: function () {
	    browser.driver.sleep(5000);   
		return this.send_invitation_btn.isDisplayed();
    	}
    },
    
    sendInvitationButtonClick: {
    	value: function () {
    		console.log("clicking on send Invitation button");
    		return this.send_invitation_btn.click();
    	}
    },
   
    verifyPostOverlay: {
    	value: function () {
    		console.log("verifying post overlay");
    		return this.post_overlay.isDisplayed();
    	}
    }
});

module.exports = WidgetPage;