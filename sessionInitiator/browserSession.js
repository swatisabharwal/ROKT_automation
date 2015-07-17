var protractor = require('protractor');

function driverSession(){}

driverSession.create = function(){
browser.driver.sleep(5000);
browser.driver.get('http://roktdemo.com/tm/automation.html');
browser.driver.sleep(20000);

};


module.exports =  driverSession;