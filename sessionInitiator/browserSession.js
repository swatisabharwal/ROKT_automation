var browserSession = function () {
  browser.driver.ignoreSynchronization = true;
  browser.driver.get('http://roktdemo.com/tm/automation.html');
  console.log("Launched URL from session");
  browser.sleep(20000);
};

module.exports = browserSession;