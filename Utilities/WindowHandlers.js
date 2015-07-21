var WindowHandlers= function(){
var popup_handlers;
var parent_handlers;
var handlers={};
browser.driver.getAllWindowHandles().then( function (handles){
                       popup_handlers=handles[1];
                       parent_handlers=handles[0];
                       browser.sleep(5000);   
                      
       });
};
module.exports = WindowHandlers;