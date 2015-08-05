var browserSession = function () {
  browser.driver.ignoreSynchronization = true;
  browser.driver.navigate().to('http://roktdemo.ticketmaster.com/tm/finish.htm');
  browser.sleep(15000);
};

module.exports = browserSession;
