var fbEventSession = function () {
  browser.driver.ignoreSynchronization = true;
  browser.driver.navigate().to('https://www.facebook.com/events/430132483807363');
  browser.sleep(5000);
};

module.exports = fbEventSession;