var WidgetPage = function() {
	var popup_handlers;
	var parent_handlers;
	var handlers = {};
};

WidgetPage.prototype = Object.create({}, {

	// UI Objects of Widget
	widgetFrame : {
		get : function() {
			return browser.driver.findElement(by.css('.wdHolder>iframe'));
		}
	},
	
	widgetFrame_sendinvitation : {
		get : function() {
			return browser.driver.findElement(by.css('.FB_UI_Dialog'));
		}
	},
	
	miniattendButton : {
		get : function() {
			return browser.driver.findElement(by.css('#ux_smartSignup_facebook_event_message_inner_buttons_attending'));
		}
	},
	
	widgetOverlay : {
		get : function() {
			return browser.driver.findElement(by.css('.ui_smartsignup.ui_module.tween_opacity'));
		}
	},
	
	shareLabel : {
		get : function() {
			return browser.driver.findElement(by.css('.ui_smartSignup_facebook_event_message_header_text'));
		}
	},
	
	loginBtn : {
		get : function() {
			return browser.driver.findElement(by.xpath('//input[contains(@value,"Log In")]'));
		}
	},

	installation_page : {
		get : function() {
			return browser.driver.findElement(by.xpath('//a[contains(text(), "Edit the info you provide")]'));
		}
	},

	okay_to_install : {
		get : function() {
			return browser.driver.findElement(by.xpath('//button[contains(text(), "Okay")]'));
		}
	},

	send_invitation_btn : {
		get : function() {
			return browser.driver.findElement(by.xpath('//button[contains(text(),"Send Invitation")]'));
		}
	},

	post_overlay : {
		get : function() {
			browser.driver.sleep(2000);
			return browser.driver.findElement(by.css('.pam'));
		}
	},
	
	verify_window_event : {
		get : function() {
			return browser.driver.findElement(by.xpath('(//div[@class="pam"]//div[@class="send_dialog"]//tr[last()]//a)[3]'));
		}
	},

	like_btn : {
		get : function() {
			return browser.driver.findElement(by.css('.pluginConnectButton>a:first-child'));
		}
	},

	cont_share_btn : {
		get : function() {
			return browser.driver.findElement(by.xpath('//div[@ class="ui_shareandwin_main_sns_skip"]/button'));
		}
	},

	link_ticketmaster : {
		get : function() {
			return browser.driver.findElement(by.xpath(' //span[contains(text(), "Go to my Ticketmaster")]'));
		}
	},

	recepients : {
    	get : function() {
			return browser.driver.findElement(by.xpath('//div[@class="innerWrap"]/input'));
		}
	},

	friend_name : {
		get : function() {
			return browser.driver.findElement(by.xpath('//span[contains(text(), "Roktdemo On")]'));
		}
	},

	send_btn : {
		get : function() {
			return browser.driver.findElement(by.xpath('//label[@id="publish"]/input'));
		}
	},

	close_btn : {
		get : function() {
			return browser.driver.findElement(by.xpath('//div[@class="buttonsContainer"]/button'));
		}
	},

	maybe_btn : {
		get : function() {
			return browser.driver.findElement(by.xpath('//div[@class="buttonsContainer"]/button'));
		}
    },
	
    like_btn : {
		get : function() {
			return browser.driver.findElement(by.xpath('//div[@class="buttonsContainer"]/button'));
		}
	},

	emailId : {
		get : function() {
			return browser.driver.findElement(by.xpath('//input[@id="email"]'));
		}
	},
	
	password : {
		get : function() {
			return browser.driver.findElement(by.xpath('//input[@id="pass"]'));
		}
	},
	

	// Methods around Object -- User actions

   
    clickMayebBtn: {
		value : function() {  		
			return this.maybe_btn.click();
		}
	},

    clickLikeBtn: {
		value : function() {  		
			return this.like_btn.click();
		}
	},
	
	switchToWidgetFrame : {
		value : function() {  		
			return browser.driver.switchTo().frame(this.widgetFrame);
		}
	},

	getVisibiltyOfWidgetOverlay : {
		value : function() {  		
			return this.widgetOverlay.isDisplayed();
		}
	},

	switchToSendInvitationFrames : {
		value : function() {  		
			return browser.driver.switchTo().frame(this.widgetFrame_sendinvitation);
		}
	},

	getShareLabelText : {
		value : function() {  		
			return this.shareLabel.getText();
		}
	},

	verifyMiniAttendButton : {
		value : function() {  		
			return this.miniattendButton.isDisplayed();
		}
	},

	
	clickOnMiniAttendButton : {
		value : function() {  		
			return this.miniattendButton.click();
		}
	},

	
	fbWindowHandler : {
		value : function() {
			browser.driver.getAllWindowHandles().then(function(handles) {
				browser.driver.sleep(5000);
				parent_handlers = handles[0];
				popup_handlers = handles[1];
				
				browser.driver.sleep(5000);
				browser.driver.switchTo().window(popup_handlers);
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
			this.loginBtn.click();
			browser.driver.sleep(2000);
			browser.driver.getAllWindowHandles().then(function(handles) {
				browser.driver.sleep(3000);
				browser.driver.switchTo().window(handles[0]);
			});
		}
	},

	clickOnFbLoginBtn : {
		value : function() {  		
			this.loginBtn.click().then(function(){
			});
		}
	},
	

	verifyInstallationPage : {
		value : function() {  		
			return this.installation_page.isDisplayed();
		}
	},

	clickOkayToInstall : {
		value : function() {  		
			this.okay_to_install.click();
			browser.driver.sleep(3000);
			browser.driver.getAllWindowHandles().then(function(handles) {
				browser.driver.sleep(3000);
				browser.driver.switchTo().window(handles[0]);
			});
		}
	},

	enterRecepient : {
		value : function() {  		
     			this.recepients.sendKeys('Rokt').then(function() {
				browser.driver.sleep(2000);
				browser.driver.actions().mouseMove(browser.driver.findElement(by.xpath('//ul[contains(@id,"typeahead_list")]//li/img[1]'))).perform().then(function(){
			    		browser.driver.sleep(1000);
						browser.driver.findElement(by.xpath('//ul[contains(@id,"typeahead_list")]//li/img[1]')).click();
					});
				});
		}
	},

	clickOnSend : {
		value : function() {  		
			browser.driver.sleep(5000);
			this.send_btn.click();
    	}
	},

	verifySendInvitationButton : {
		value : function() {  		
			browser.driver.sleep(5000);
			return this.send_invitation_btn.isDisplayed();
		}
	},

	sendInvitationButtonClick : {
		value : function() {  		
			return this.send_invitation_btn.click();
		}
	},

	verifyPostOverlay : {
		value : function() {  		
			return this.post_overlay.isDisplayed();
		}
	},

	verifyWindowEvent : {
		value : function() {  	
			return this.verify_window_event.isDisplayed();
		}
	},

	clickOnLike : {
		value : function() {
			this.switchToWidgetFrame;
			return this.like_btn.click();
		}
	},

	verifyContinueShareButton : {
		value : function() {  		
			return this.cont_share_btn.isDisplayed();
		}
	},

	clickOnContBtnFromEndWidgetPage : {
		value : function() {  		
			return this.cont_share_btn.click();
		}
	},

	verifyLinkToTicketmaster : {
		value : function() {  		
			return this.link_ticketmaster.isDisplayed();
		}
	},

	clickOnClose : {
		value : function() {  		
			return this.close_btn.click();
		}
	},

	installAppThroughMiniShareModule : {
		value : function() {  		
			browser.driver.sleep(3000);
			this.clickOnMiniAttendButton();
			browser.driver.sleep(3000);
			browser.driver.getAllWindowHandles().then(function(handles) {
				browser.driver.sleep(3000);
				browser.driver.switchTo().window(handles[1]);
			});
			this.okay_to_install.click();
			browser.driver.getAllWindowHandles().then(function(handles) {
				browser.driver.sleep(3000);
				browser.driver.switchTo().window(handles[0]);
			});
			browser.driver.sleep(3000);
			this.switchToWidgetFrame();
		}
	},

	
	
	
	
	
	
	

	

	

});

module.exports = WidgetPage; 