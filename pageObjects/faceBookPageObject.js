var fbAuthentication = function() {
	//Empty constructor for now, can add piece of code if required

};
fbAuthentication.prototype = Object.create({}, {
   /***************************Facebook WEb Elements***************************/	
	home_tab : { get: function () {return browser.driver.findElement(by.xpath('//a[contains(@href,"https://www.facebook.com/?ref=tn_tnmn")]'));}},
	click_join_page : {get : function() {return browser.driver.findElement(by.xpath('//div[@id="event_button_bar"]/a[1]'));}},
	event_status : {get : function() {return browser.driver.findElement(by.xpath('//a[@role="button"]/span[contains(text(),"Going")]'));}},

	user_event_status : {get : function() {return browser.driver.findElement(by.xpath('//a[ @href="https://www.facebook.com/profile.php?id=100009853330781"]/i[@class="_4dy6 img sp_Uxb4b5rwgIc sx_2bfef4"]'));}},
	logout_tab : {get : function() {return browser.driver.findElement(by.css('#pageLoginAnchor'));}},
	logout_btn : {get : function() {return browser.driver.findElement(by.xpath('//li[@class="_54ni navSubmenu __MenuItem"][9]'));}},
	loginBtn : {get : function() {return browser.driver.findElement(by.xpath('//input[contains(@value,"Log In")]'));}},
	emailId : {get : function() {return browser.driver.findElement(by.xpath('.//*[@id="email"]'));}},
	password : {get : function() {return browser.driver.findElement(by.xpath('.//*[@id="pass"]'));}},
	loginBtn : {get : function() {return browser.driver.findElement(by.xpath('//input[contains(@value,"Log In")]'));}},
	user_messages : {get : function() {return browser.driver.findElement(by.xpath('//span[contains(text(),"Messages")]'));}}, 	 
	select_sender : {get : function() {return browser.driver.findElement(by.xpath('//span[contains(text(),"Automation shared a link.")]'));}},
	verify_message : {get : function() {return browser.driver.findElement(by.xpath('(//ul[@id="webMessengerRecentMessages"]//div[contains(text(),"ticketmaster.com")])[last()]'));}}, 
	message_settings : {get : function() {return browser.driver.findElement(by.xpath('//button[contains(.,"New Message")]/following-sibling::div[1]//button'));}}, 
	clear_messages : {get : function() {return browser.driver.findElement(by.xpath('//span[contains(text(),"Delete Conversation...")] '));}}, 
	clear_conversation : {get : function() {return browser.driver.findElement(by.xpath('//label[contains(@class ,"uiButton uiButtonLarge uiButtonConfirm")]'));}},
	undo_tab : {get : function() {return browser.driver.findElement(by.css('.mrs.fbEventSpriteIcon._347h._347i.img'));}},
	undo_event : {get : function() {return browser.driver.findElement(by.xpath('//span[contains(text(),"Remove me from Guest List")]'));}},
	undo_ok : {get : function() {return browser.driver.findElement(by.xpath('//button[contains(text(), "OK")]'));}},
	fb_settings_tab : {get : function() {return browser.driver.findElement(by.xpath('//div[@id="privacyFlyoutLabel"]'));}},
	see_more_settings_tab : {get : function() {return browser.driver.findElement(by.xpath('//a[contains(text(),"See More Settings")]'));}},
	user_apps : {get : function() {return browser.driver.findElement(by.xpath('//a[contains(@href, "https://www.facebook.com/settings?tab=applications")]'));}},
	app_remove : {get : function() {return browser.driver.findElement(by.xpath('//a[@aria-label="Remove"]/i  '));}},
	remove_now : {get : function() {return browser.driver.findElement(by.xpath('//label[@class="uiButton uiButtonLarge uiButtonConfirm"]/input'));}},
	hidden_app_remove : {get : function() {return browser.driver.findElement(by.xpath('//div[contains(text(),"tripcierge")]/../../../preceding-sibling::img'));}},
	list_eventButtons : {get : function() {return browser.driver.findElements(by.css('#event_button_bar>a'));}},
	event_status_maybe : {get : function() {return browser.driver.findElement(by.xpath('//a[@role="button"]/span[contains(text(),"Maybe")]'));}},
	maybe_event:{get : function() {return browser.driver.findElement(by.css('._54ni.fbEventClassicButton.__MenuItem:nth-child(2)'));}},
	user_event_status : {get : function() {return browser.driver.findElement(by.xpath('//a[ @href="https://www.facebook.com/profile.php?id=100009853330781"]/i[@class="_4dy6 img sp_Uxb4b5rwgIc sx_2bfef4"]'));}},
	user_event_status_maybe : {get : function() {return browser.driver.findElement(by.xpath('//a[@aria-label="Automation TestAccount (Maybe)"]'));}},

	  
	   /***********************Actions on Facebook Element************************/
	  
	  
	checkForJoinButtonOnEventsPageAndRemoveUserIfJoinedAlready : {  
		value : function() {
			var lengthOfEventBar;
			this.list_eventButtons.then(function(elem){
				lengthOfEventBar = elem.length;	
				if(lengthOfEventBar > 0 ){
					console.log("Join button on facebook events page is already present, no need of removing user");
				}else{
					console.log("No Join button on facebook events page, need to remove user from the guest list");
					browser.driver.findElement(by.css('.mrs.fbEventSpriteIcon._347h._347i.img')).click().then(function(){
						browser.driver.sleep(3000);
						browser.driver.findElement(by.xpath('//span[contains(text(),"Remove me from Guest List")]')).click().then(function(){
							browser.driver.sleep(5000);
							browser.driver.findElement(by.xpath('//button[contains(text(), "OK")]')).click();
							console.log("User removed from guest list");
						});
					});					
				}
				
			});
		}
	},
	
	
	checkAppAlreadyInstalledOrNot : {  
		value : function(nameOfApp) {
			console.log("App to be searched on fb:- "+nameOfApp);
			return browser.driver.findElements(by.xpath('//div[@id="SettingsPage_Content"]//div[text()="'+nameOfApp+'"]')).then(function(elem){
				return elem.length;
			});
		}
	},
	
	
	inputFbId : {  
		value : function() {
			return this.emailId.sendKeys("testuser01.automation@gmail.com");

		}
	},
	
	inputFbPass : {
		value : function() {
			return this.password.sendKeys("Qait@123");
		}
	},
	clickOnLoginBtn : {
		value : function() {
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
	
	clickGoingStatus: {
		value : function() {
			return this.event_status.click();
		}
	},
	
	clickMaybeStatus: {
		value : function() {
			 this.maybe_event.click();
		}
	},
	
	eventStatusMaybe : {
		value : function() {
			return this.event_status_maybe.isDisplayed();
		}
	},
	
	userEventStatusMaybe : {
		value : function() {
			return this.user_event_status_maybe.isDisplayed();
		}
	},



	
	logoutTab : {
		value : function() {
			browser.driver.sleep(1000);
			this.logout_tab.then(function(element){
   				browser.driver.actions().mouseMove(element).perform();
   				browser.driver.sleep(2000);
   				browser.driver.findElement(by.css('#pageLoginAnchor')).click();
 
			});
		}
	},

	logoutBtn : {
		value : function() {
			this.logout_btn.click();
		}
	},
	
	inputFrndFbId : {
		value : function() {
			return this.emailId.sendKeys("roktdemo.one@gmail.com");
		}
	},
	
	 inputFbPass : {
		value : function() {
			return this.password.sendKeys("Qait@123");
		}
	},
	
	
	clickMessages : {
		value : function() {
			browser.driver.sleep(3000);
			return this.user_messages.then(function(elem){
				browser.driver.actions().mouseMove(elem).perform();
				browser.driver.sleep(2000);
				browser.driver.findElement(by.xpath('//span[contains(text(),"Messages")]')).click();
				//}}, 	 
			});
		}
	},
	
	selectSender : {
		value : function() {
			browser.driver.sleep(4000);
			this.select_sender.then(function(elem){
				browser.driver.actions().mouseMove(elem).perform();
				browser.driver.sleep(2000);
				browser.driver.findElement(by.xpath('//span[contains(text(),"Automation shared a link.")]')).click();
			});
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

	clickUndoTab : {
		value : function() {  		
			return this.undo_tab.click();
		}
	},
	
	clickUndoEvent : {
		value : function() {  		
			return this.undo_event.click();
		}
	},

	clickUndoOk : {
		value : function() {  	
			return this.undo_ok.click();
		}
	},

	fbSettingsTab : {
		value : function() {  		
			return this.fb_settings_tab.click();
		}
	},

	seeMoreSettingsTab : {
		value : function() {  	
			this.see_more_settings_tab.click();

		}
	},

	userApps : {
		value : function() {  		
			this.user_apps.click();
		}
	},

	appRemove : {
		 value: function (appName) {
   
   	this.hidden_app_remove.then(function(elem){
   	browser.driver.sleep(2000);
   	browser.driver.actions().mouseMove(elem).perform().then(function(){
    browser.driver.sleep(2000);
    browser.driver.findElement(by.xpath('//div[text()="'+appName+'"]/../../preceding-sibling::span/a[@aria-label="Remove"]/i')).click();
    });   
   });
  }
 },
	removeNow : {
		value : function() {  		
			this.remove_now.click();
		}
	},

});


module.exports = fbAuthentication; 