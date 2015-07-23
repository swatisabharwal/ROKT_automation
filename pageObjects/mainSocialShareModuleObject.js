 var mainModule = function () {
 // var popup_handlers;
	    // var parent_handlers;
		// var handlers={};
	};
        //var handl;
        
 mainModule.prototype = Object.create({}, {
 	
	check_box:     { get: function () { return browser.driver.findElement(by.xpath('//input[@id="ux_iagree_check"]'));}},
    cont_btn:      { get: function () { return browser.driver.findElement(by.xpath('//div[@id="ux_smartsignup_layout_buttons"]/button'));}},
    skip_btn:      { get: function () { return browser.driver.findElement(by.xpath('//div[@ class="ui_surveyQuestion_buttons"]/button'));}},
    cont_share_btn:{ get: function () { return browser.driver.findElement(by.xpath('//div[@ class="ui_shareandwin_main_sns_skip"]/button'));}},
    question:      {get : function(){return browser.driver.findElement(by.css('.ui_surveyQuestion_html'));}},


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
  	if(this.question.isDisplayed()){
  		browser.driver.sleep(2000);
  		this.skip_btn.click();
  		console.log("test");
  	   }
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

module.exports = mainModule;