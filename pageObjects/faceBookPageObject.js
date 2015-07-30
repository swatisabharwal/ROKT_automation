var fbAuthentication = function() {
	//Empty constructor for now, can add piece of code if required

};
fbAuthentication.prototype = Object.create({}, {
   /***************************Facebook WEb Elements***************************/	
	home_tab : { get: function () {return browser.driver.findElement(by.xpath('//a[contains(@href,"https://www.facebook.com/?ref=tn_tnmn")]'));}},
	click_join_page : {get : function() {return browser.driver.findElement(by.xpath('//div[@id="event_button_bar"]//a[1]'));}},
	event_status : {get : function() {return browser.driver.findElement(by.xpath('//a[@role="button"]/span[contains(text(),"Going")]'));}},
	user_event_status : {get : function() {return browser.driver.findElement(by.xpath('//a[ @href="https://www.facebook.com/profile.php?id=100009853330781"]/i[@class="_4dy6 img sp_Uxb4b5rwgIc sx_2bfef4"]'));}},
	logout_tab : {get : function() {return browser.driver.findElement(by.xpath('//div[contains(text(), "Account Settings")]  '));}},
	logout_btn : {get : function() {return browser.driver.findElement(by.xpath('//li[@class="_54ni navSubmenu __MenuItem"][9]'));}},
	loginBtn : {get : function() {return browser.driver.findElement(by.xpath('//input[contains(@value,"Log In")]'));}},
	emailId : {get : function() {return browser.driver.findElement(by.xpath('.//*[@id="email"]'));}},
	password : {get : function() {return browser.driver.findElement(by.xpath('.//*[@id="pass"]'));}},
	loginBtn : {get : function() {return browser.driver.findElement(by.xpath('//input[contains(@value,"Log In")]'));}},
	user_messages : {get : function() {return browser.driver.findElement(by.xpath('//span[contains(text(),"Messages")]'));}}, 	 
	select_sender : {get : function() {return browser.driver.findElement(by.xpath('//span[contains(text(),"Automation shared a link.")]'));}},
	verify_message : {get : function() {return browser.driver.findElement(by.xpath('//li[@class="webMessengerMessageGroup clearfix"]'));}}, 
	message_settings : {get : function() {return browser.driver.findElement(by.xpath('//div[@id="u_jsonp_2_s"]'));}}, 
	clear_messages : {get : function() {return browser.driver.findElement(by.xpath('//span[contains(text(),"Delete Conversation...")] '));}}, 
	clear_conversation : {get : function() {return browser.driver.findElement(by.xpath('//label[contains(@class ,"uiButton uiButtonLarge uiButtonConfirm")]'));}},
	 
	 
	   /***********************Actions on Facebook Element************************/
	
	inputFbId : {  
		value : function() {
			console.log("Enter username to log in to FaceBook");
			return this.emailId.sendKeys("testuser01.automation@gmail.com");

		}
	},
	
	inputFbPass : {
		value : function() {
			console.log("Enter password to log in to FaceBook");
			return this.password.sendKeys("Qait@123");
		}
	},
	clickOnLoginBtn : {
		value : function() {
			console.log("LoggedIn into FaceBook");
			return this.loginBtn.click();
		}
	},
	
	 verifyHomeTabObFb: {
		value: function () {
			return this.home_tab.isDisplayed();
		}
	},
	
	clickJoinPage : {
		value : function() {
			return this.click_join_page.click();
		}
	},
	
	eventStatus : {
		value : function() {
			return this.event_status.isDisplayed();
		}
	},

	userEventStatus : {
		value : function() {
			return this.user_event_status.isDisplayed();
		}
	},
	
	logoutTab : {
		value : function() {
			this.logout_tab.click();

		}
	},
		
	logoutBtn: {
		value: function (){
			this.logout_btn.click();
		}
	} ,

	frndId : {
		value : function() {
			return this.emailId.sendKeys("roktdemo.one@gmail.com");
		}
	},
	
	
	clickOnFbLoginBtn : {
		value : function() {
			this.loginBtn.click();
		}
	},

	clickMessages : {
		value : function() {
			return this.user_messages.click();
		}
	},
	
	selectSender : {
		value : function() {
			return this.select_sender.click();
		}
	},
	
	verifyMessage : {
		value : function() {
			return this.verify_message.isDisplayed();
		}
	},
	
	messageSettings : {
		value : function() {
			return this.message_settings.click();
		}
	},
	
	clearMessages : {
		value : function() {
			return this.clear_messages.click();
		}
	},
	
	clearConversation : {
		value : function() {
			return this.clear_conversation.click();
		}
	},
	
	appRemove : {
 	 value: function () {
      	this.hidden_app_remove.then(function(elem){
  		browser.driver.actions().mouseMove(elem).perform().then(function(){
    	browser.driver.sleep(2000);
   	    browser.driver.findElement(by.xpath('//div[text()="tripcierge"]/../../preceding-sibling::span/a[@aria-label="Remove"]/i')).click();
    });    
 });
 }
 },

});
module.exports = fbAuthentication; 