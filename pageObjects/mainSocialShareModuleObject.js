
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
    mainModuleAttend_btn: {get: function(){return browser.driver.findElement(by.css('#ux_shareandwin_buttons_facebook_event_attending'));}},


clickCheckbBox:	{
	 value: function () {
	 	console.log('Checked on CheckBox');
		return this.check_box.click();
     
      }
   },

 verifyContBtn:	{
	 value: function () {
	 	console.log("Continue button is available");
		return this.cont_btn.isDisplayed();
     
      }
   },

  clickContBtn:{
	 value: function () {
	 	console.log("clicked on continue button");
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
  		console.log("Length is:- "+len);
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
   
   clickOnAttendingBtnFromMainModuleWidgetPage: {
   	value: function(){
   	return this.mainModuleAttend_btn.click();	
   	}
   },
   
   
 });

module.exports = mainModule;