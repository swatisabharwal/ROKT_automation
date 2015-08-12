var dataObject         = require('../dataFile/dataObject.json');
var mainModule = function () {
    var popup_handlers;
	var parent_handlers;
	var handlers={};
//
	};
                
 mainModule.prototype = Object.create({}, {
 	
	check_box:{ 
	    get: function () { 
		     return browser.driver.findElement(by.xpath('//div [@class="ui_iagree_checkbox"]/span [@class="fancycheckbox unchecked"]'));
		}
	},
	
    cont_btn:{ 
	    get: function () { 
	         return browser.driver.findElement(by.xpath('//button[contains(text(),"Continue")]'));
	   }
	},
	
	
	
    skip_btn:{ 
	    get: function () { 
		     return browser.driver.findElement(by.xpath('//div[@ class="ui_surveyQuestion_buttons"]/button'));
	   }
	},
	
    cont_share_btn:{ 
	    get: function () { 
		     return browser.driver.findElement(by.xpath('//div[@ class="ui_shareandwin_main_sns_skip"]/button'));
	   }
	},
	
    question:{
		get : function()  {
			 return browser.driver.findElements(by.css('.ui_progress_step'));
	   }
	},
	
    mainattendButton:{
		get: function(){
			 return browser.driver.findElement(by.css('#ux_shareandwin_buttons_facebook_event_attending'));
	   }
	},
	
    main_maybeButton:{
		get: function(){
			 return browser.driver.findElement(by.css('#ux_shareandwin_buttons_facebook_event_maybe'));
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
	    	 browser.driver.sleep(2000);
	    	 //browser.driver.executeScript("arguments[0].scrollIntoView(true);",this.cont_btn);
		     return this.cont_btn.click();
        }
    },

	logoutTab : {
		value : function() {
			this.logout_tab.then(function(element){
   				browser.driver.actions().mouseMove(element).perform();
				browser.driver.sleep(2000);
				browser.driver.executeScript("arguments[0].scrollIntoView(true);",element);
				return browser.driver.findElement(by.css('#pageLoginAnchor')).click();
			});
		}
	},
    verifyOffer:	{
	    value: function () {
	    	browser.driver.sleep(5000);
 		    return this.skip_btn.isDisplayed();
        }
    },

    skipOffers: {
  	    value: function(){
  	    	 browser.driver.sleep(1000);
     	     this.question.then(function(elems){
  		     var len = elems.length;
  		     for(var i = 0; i<(len-1) ;i++){
  		     	 browser.driver.findElement(by.xpath('//div[@ class="ui_surveyQuestion_buttons"]/button')).click();
  			     browser.driver.sleep(1000);
  		        }
        	 });
  	         return true;
  	    }
    },
  	
    verifyContinueShareButton:	{
	    value: function () {
		     return this.cont_share_btn.isDisplayed();
        }
    },

    clickOnContBtnFromEndWidgetPage:	{
	    value: function () {
	         return this.cont_share_btn.click();
        }
    },
   
    verifyMainAttendButton : {
		value : function() {
			 browser.driver.sleep(1000);
			 return this.mainattendButton.isDisplayed();
		}
	},
   
    clickOnMainAttendButton: {
   	    value: function(){
			 return this.mainattendButton.click();	
   	    }
    },
   
    verifyMainMaybeButton : {
		value : function() {
			 return this.main_maybeButton.isDisplayed();
		}
	},
   
    clickOnMainMaybeButton: {
   	    value: function(){
			 return this.main_maybeButton.click();	
   	  }
    },
   
});

module.exports = mainModule;