var singleSession = function (url) {
  browser.driver.ignoreSynchronization = true;
  browser.driver.navigate().to(url);
  browser.sleep(15000);
};

module.exports = singleSession;
