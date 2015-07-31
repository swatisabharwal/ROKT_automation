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

	emailId : {get : function() {return browser.driver.findElement(by.xpath('//div[@class="form_row clearfix"]/input[@id="email"]'));}},
	password : {get : function() {return browser.driver.findElement(by.xpath('//div[@class="form_row clearfix"]/input[@id="pass"]'));}},
	

	
	
	

	
	// Methods around Object -- User actions

   
   clickMayebBtn: {
		value : function() {  		
		    console.log("Clicking on mini attend button");
			return this.maybe_btn.click();
		}
	},

  clickLikeBtn: {
		value : function() {  		
		    console.log("Clicking on mini attend button");
			return this.like_btn.click();
		}
	},
	
	switchToWidgetFrame : {
		value : function() {  		
			console.log("User successfully switched to widget iFrame");
			return browser.driver.switchTo().frame(this.widgetFrame);
		}
	},

	getVisibiltyOfWidgetOverlay : {
		value : function() {  		
		 	console.log("Checking if Widget Overlay is correctly displayed");
			return this.widgetOverlay.isDisplayed();
		}
	},


	switchToSendInvitationFrames : {
		value : function() {  		
		    console.log("Switching to frame for sending invitation");
			return browser.driver.switchTo().frame(this.widgetFrame_sendinvitation);
		}
	},

	getShareLabelText : {
		value : function() {  		
		    console.log("Verifying the Widget Content");
			return this.shareLabel.getText();
		}
	},

	verifyMiniAttendButton : {
		value : function() {  		
		    console.log("Verifying mini attend Button");
			return this.miniattendButton.isDisplayed();
		}
	},

	
	clickOnMiniAttendButton : {
		value : function() {  		
		    console.log("Clicking on mini attend button");
			return this.miniattendButton.click();
		}
	},

	
	fbWindowHandler : {
		value : function() {
  		
			browser.driver.getAllWindowHandles().then(function(handles) {
				browser.driver.sleep(5000);
				console.log("New window handling");
				parent_handlers = handles[0];
				popup_handlers = handles[1];
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
		    console.log("Entering fb Id");
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
		    console.log("Clicking on Login button");
			this.loginBtn.click();
			browser.driver.switchTo().window(parent_handlers);
		}
	},

	clickOnFbLoginBtn : {
		value : function() {  		
		    console.log("Clicking on Login button");
			this.loginBtn.click();
		}
	},
	

	verifyInstallationPage : {
		value : function() {  		
		    console.log("Verifying Installation page is displayed");
			return this.installation_page.isDisplayed();
		}
	},

	clickOkayToInstall : {
		value : function() {  		
		    console.log("Clicking on okay to install the app");
			this.okay_to_install.click();
			browser.driver.switchTo().window(parent_handlers);

		}
	},

	
	

	enterRecepient : {
		value : function() {  		
				console.log("Friend is selected");
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
			console.log("Message is send");
			browser.driver.sleep(5000);
			this.send_btn.click();

		}
	},

	verifySendInvitationButton : {
		value : function() {  		
		   console.log("Verifying Send Invitation Button");
			browser.driver.sleep(5000);
			return this.send_invitation_btn.isDisplayed();
			
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
     		console.log("Verifying Event Link is Displayed");
			return this.verify_window_event.isDispalyed();

		}
	},

	clickOnLike : {
		value : function() {
			console.log("Clicking On Like");
			this.switchToWidgetFrame;
			return this.like_btn.click();

		}
	},

	verifyContinueShareButton : {
		value : function() {  		
		    console.log("Verifying Continue Button is Displayed");
			return this.cont_share_btn.isDisplayed();

		}
	},

	clickOnContBtnFromEndWidgetPage : {
		value : function() {  		
		    console.log("Clicking on Continue button");
			return this.cont_share_btn.click();

		}
	},

	verifyLinkToTicketmaster : {
		value : function() {  		
		    console.log("Verifying the ticketmaster link");
			return this.link_ticketmaster.isDisplayed();
		}
	},

	clickOnClose : {
		value : function() {  		
		    console.log("Clicking on Close");
			return this.close_btn.click();
		}
	},

	
	installAppThroughMiniShareModule : {
		value : function() {  		
		    console.log("Installing the app...");
			browser.driver.sleep(3000);
			this.clickOnMiniAttendButton();
			browser.driver.sleep(3000);
			browser.driver.getAllWindowHandles().then(function(handles) {
				browser.driver.sleep(3000);
				browser.driver.switchTo().window(handles[1]);
			});
			//this.fbWindowHandler();
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