var fbSession = function () {
  browser.driver.ignoreSynchronization = true;
  browser.driver.get('https://www.facebook.com/');
  browser.sleep(15000);
};

module.exports = fbSession;
