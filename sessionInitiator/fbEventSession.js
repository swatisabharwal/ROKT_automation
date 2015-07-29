var fbEventSession = function () {
  browser.driver.ignoreSynchronization = true;
  browser.driver.get('https://www.facebook.com/events/430132483807363');
  console.log("Launched URL from session");
  browser.sleep(10000);
};

module.exports = fbEventSession;
