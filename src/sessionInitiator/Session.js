var singleSession = function (url) {
  
  browser.driver.ignoreSynchronization = false;

  browser.driver.manage().timeouts().implicitlyWait(30000);
  browser.driver.get(url);
  browser.driver.sleep(4000);
};

module.exports = singleSession;
