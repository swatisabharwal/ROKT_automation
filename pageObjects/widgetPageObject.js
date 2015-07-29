var WidgetPage = function() {
	//Empty constructor for now, can add piece of code if required
	//var Whandlers =new WindowHandler();
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
	// widgetFrame_inner_sendinvitation: { get: function () { return browser.driver.findElement(by.xpath('//form[@id="uiserver_form"]')); }},
	

	miniattendButton : {
		get : function() {
			return browser.driver.findElement(by.css('#ux_smartSignup_facebook_event_message_inner_buttons_attending'));
		}
	},
	mainattendButton : {
		get : function() {
			return browser.driver.findElement(by.xpath('//button[@id="ux_shareandwin_buttons_facebook_event_attending"]'));
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
			return browser.driver.findElement(by.xpath('//div[contains(text(), "Send a Message")]'));
		}
	},
	verify_window_event : {
		get : function() {
			return browser.driver.findElement(by.xpath('//a[contains(@href,"www.ticketmaster.com")]'));
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

	fb_settings_tab : {
		get : function() {
			return browser.driver.findElement(by.xpath('//div[@id="privacyFlyoutLabel"]'));
		}
	},
	see_more_settings_tab : {
		get : function() {
			return browser.driver.findElement(by.xpath('//a[contains(text(),"See More Settings")]'));
		}
	},
	user_apps : {
		get : function() {
			return browser.driver.findElement(by.xpath('//a[contains(@href, "https://www.facebook.com/settings?tab=applications")]'));
		}
	},
	app_remove : {
		get : function() {
			return browser.driver.findElement(by.xpath('//a[@aria-label="Remove"]/i  '));
		}
	},
	remove_now : {
		get : function() {
			return browser.driver.findElement(by.xpath('//label[@class="uiButton uiButtonLarge uiButtonConfirm"]/input'));
		}
	},
	
	undo_tab : {
		get : function() {
			return browser.driver.findElement(by.css('.mrs.fbEventSpriteIcon._347h._347i.img'));
		}
	},
	undo_event : {
		get : function() {
			return browser.driver.findElement(by.xpath('//span[contains(text(),"Remove me from Guest List")]'));
		}
	},
	undo_ok : {
		get : function() {
			return browser.driver.findElement(by.xpath('//button[contains(text(), "OK")]'));
		}
	},


	emailId : {get : function() {return browser.driver.findElement(by.xpath('//div[@class="form_row clearfix"]/input[@id="email"]'));}},
	password : {get : function() {return browser.driver.findElement(by.xpath('//div[@class="form_row clearfix"]/input[@id="pass"]'));}},
	

	
	
	

	
	// Methods around Object -- User actions

	switchToWidgetFrame : {
		value : function() {
			console.log("User successfully switched to widget iFrame");
			return browser.driver.switchTo().frame(this.widgetFrame);
		}
	},

	getVisibiltyOfWidgetOverlay : {
		value : function() {
			console.log("Widget Overlay is correctly displayed");
			return this.widgetOverlay.isDisplayed();
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

	verifyMainAttendButton : {
		value : function() {

			return this.mainattendButton.isDisplayed();
		}
	},

	clickOnMiniAttendButton : {
		value : function() {
			return this.miniattendButton.click();
		}
	},

	clickOnMainAttendButton : {
		value : function() {
			return this.mainattendButton.click();
			this.fbWindowHandler;
			console.log("Attend button is clicked");
		}
	},

	fbWindowHandler : {
		value : function() {

			browser.driver.getAllWindowHandles().then(function(handles) {
				browser.driver.sleep(5000);
				console.log("handling");
				popup_handlers = handles[1];
				parent_handlers = handles[0];
				browser.driver.sleep(5000);
				console.log("moving to current");
				browser.driver.switchTo().window(popup_handlers).then(function() {
					console.log("popup window handeled");
				});
			});
		}
	},

	inputFbId : {
		value : function() {
			return this.emailId.sendKeys("testuser01.automation@gmail.com");
		}
	},

	
	clickOnLoginBtn : {
		value : function() {
			this.loginBtn.click();
			browser.driver.switchTo().window(parent_handlers);
		}
	},

	
	

	verifyInstallationPage : {
		value : function() {
			this.installation_page.isDisplayed();
		}
	},

	clickOkayToInstall : {
		value : function() {
			this.okay_to_install.click();
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
		value : function() {
			this.app_remove.click();
		}
	},

	removeNow : {
		value : function() {
			this.remove_now.click();
		}
	},

	

	enterRecepient : {
		value : function() {
			this.recepients.sendKeys('Rokt').then(function() {
				browser.driver.sleep(2000);
				browser.driver.findElement(by.xpath('//ul[contains(@id,"typeahead_list")]//li/img[1]')).click();
				console.log("Friend is selected");
			});

		}
	},

	clickOnSend : {
		value : function() {
			browser.driver.sleep(5000);
			this.send_btn.click();
			console.log("Message is send");

		}
	},

	verifySendInvitationButton : {
		value : function() {
			browser.driver.sleep(5000);
			return this.send_invitation_btn.isDisplayed();
			console.log("Send Invitation Button Verified");
		}
	},

	sendInvitationButtonClick : {
		value : function() {
			console.log("Send Invitation button is clicked");
			return this.send_invitation_btn.click();
		}
	},

	verifyPostOverlay : {
		value : function() {
			console.log("verifying post overlay");
			return this.post_overlay.isDisplayed();
		}
	},

	verifyWindowEvent : {
		value : function() {
			return this.verify_window_event.isDispalyed();

		}
	},

	clickOnLike : {
		value : function() {
			//browser.driver.switchTo.defaultContent();
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

	
	
	
	
	
	

	

	

});

module.exports = WidgetPage; 