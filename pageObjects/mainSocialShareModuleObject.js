
 var mainModule = function () {
 var popup_handlers;
	    var parent_handlers;
		var handlers={};
	};
        var handl;
        
 mainModule.prototype = Object.create({}, {
 	
	check_box:     { get: function () { return browser.driver.findElement(by.xpath('//input[@id="ux_iagree_check"]'));}},
    cont_btn:      { get: function () { return browser.driver.findElement(by.xpath('//div[@id="ux_smartsignup_layout_buttons"]/button'));}},
    skip_btn:      { get: function () { return browser.driver.findElement(by.xpath('//div[@ class="ui_surveyQuestion_buttons"]/button'));}},
    cont_share_btn:{ get: function () { return browser.driver.findElement(by.xpath('//div[@ class="ui_shareandwin_main_sns_skip"]/button'));}},
    question:      {get : function()  {return browser.driver.findElements(by.css('.ui_progress_step'));}},
    mainattendButton: {get: function(){return browser.driver.findElement(by.css('#ux_shareandwin_buttons_facebook_event_attending'));}},
    main_maybeButton :{get: function(){return browser.driver.findElement(by.css('#ux_shareandwin_buttons_facebook_event_maybe'));}},


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

  
  skipOffers: {
  	value: function(){
     	this.question.then(function(elems){
  		var len = elems.length;
  		for(var i = 0; i<(len-1) ;i++){
  			browser.driver.findElement(by.xpath('//div[@ class="ui_surveyQuestion_buttons"]/button')).click();
  			browser.driver.sleep(2000);
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