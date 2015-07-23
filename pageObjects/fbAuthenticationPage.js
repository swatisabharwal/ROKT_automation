 var fbAuthentication = function () {
	//Empty constructor for now, can add piece of code if required

};
 fbAuthentication.prototype = Object.create({}, {

    emailId:       { get: function () { return browser.driver.findElement(by.xpath('.//*[@id="email"]'));}},
    password:      { get: function () { return browser.driver.findElement(by.xpath('.//*[@id="pass"]'));}},
    loginBtn:      { get: function () { return browser.driver.findElement(by.xpath('//input[contains(@value,"Log In")]'));}},
	
	inputFbId: {
        value: function () {
		return this.emailId.sendKeys("testuser01.automation@gmail.com");
        }
    },
  inputFbPass: {
        value: function () {
             return this.password.sendKeys("Qait@123");
       }
   },
clickOnLoginBtn: {
	  value: function () {
		 return this.loginBtn.click();
       }
   },    
   
 });
 module.exports = fbAuthentication;