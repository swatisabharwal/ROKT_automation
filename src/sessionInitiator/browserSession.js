var browserSession = function () {
  browser.driver.ignoreSynchronization = true;
  browser.driver.navigate().to('http://roktdemo.com/tm/automation.html');
  browser.sleep(5000);
};

module.exports = browserSession;
