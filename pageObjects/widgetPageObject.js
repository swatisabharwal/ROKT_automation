var WindowHandlers=require('../Utilities/WindowHandlers.js');	
var WidgetPage = function () {
	//Empty constructor for now, can add piece of code if required

};

 WidgetPage.prototype = Object.create({}, {
 	
 	// UI Objects of Widget 
    widgetFrame: { get: function () { return browser.driver.findElement(by.css('.wdHolder>iframe')); }},
    attendButton: { get: function () { return browser.driver.findElement(by.css('#ux_smartSignup_facebook_event_message_inner_buttons_attending')); }},
    widgetOverlay: { get: function () { return browser.driver.findElement(by.css('.ui_smartsignup.ui_module.tween_opacity')); }},
    shareLabel: { get: function () { return browser.driver.findElement(by.css('.ui_smartSignup_facebook_event_message_header_text')); }},
    emailId:       { get: function () { return browser.driver.findElement(by.css('#email'));}},
    password:      { get: function () { return browser.driver.findElement(by.css('#pass'));}},
    loginBtn:      { get: function () { return browser.driver.findElement(by.css('#u_0_2')).click();}},
	send_inviation_btn:{ get: function () { return browser.driver.findElement(by.xpath('//*[@id="ux_smartSignup_facebook_event_message_inner_buttons_send_invitation"]'));}},
    check_box:     { get: function () { return browser.driver.findElement(by.xpath('//*[@id="ux_iagree_check"]'));}},
    cont_btn:      { get: function () { return browser.driver.findElement(by.xpath('//button[@class="button submit large ui_smartsignup_buttons_next directive clickable"]'));}},
    skip_btn:      { get: function () { return browser.driver.findElement(by.xpath('//*[@id="ux_surveyQuestionGroup_holder"]/form/div/div/div[1]/div[2]/button'));}},
    cont_share_btn:{ get: function () { return browser.driver.findElement(by.xpath('//*[@id="ux_shareandwin_main_sns_skip_button"]'));}},   
   
    
    
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
    },
    
    fbWindowHandler: {
	  value: function () {
		var Whandlers =WindowHandlers();
		return browser.driver.switchTo().window(Whandlers.popuphandler);   
       }      
   },
    inputFbId: {
        value: function () {
		return this.emailId.sendKeys("testuser01.automation@gmail.com");
        }
    },
  inputFbPass: {
        value: function () {
                return this.password.sendkeys("Qait@123");
       }
   },
clickOnLoginBtn: {
	  value: function () {
		return this.loginBtn.click();
       }
   },     
   
verifySendInvitationButton: {
	 value: function () {
		var Whandlers =WindowHandlers();
		browser.driver.switchTo().frame(this.widgetFrame);
		return this.send_invitation_btn.isDisplayed();
     
      }
   },

clickCheckbBox:	{
	 value: function () {
		return this.check_box.click();
     
      }
   },

 verifyContBtn:	{
	 value: function () {
		return this.cont_btn.isDisplayed();
     
      }
   },

  clickContBtn:{
	 value: function () {
		return this.cont_btn.click();
     
      }
   },

   verifyOffer:	{
	 value: function () {
		return this.skip_btn.isDisplayed();
     
      }
   },

   clickOnSkip:	{
	 value: function () {
		return this.skip_btn.click();
     
      }
   },

    verifyCont:	{
	 value: function () {
		return this.cont_share_btn.isDisplayed();
     
      }
   },

 clickOnContBtn:	{
	 value: function () {
		return this.cont_share_btn.click();
     
      }
   }
    
});

module.exports = WidgetPage;