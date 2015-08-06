 fbTicketMasterSession = function () {
  browser.driver.ignoreSynchronization = true;
  browser.driver.navigate().to('https://www.facebook.com/Ticketmaster');
  browser.sleep(15000);
};

module.exports = fbTicketMasterSession;
