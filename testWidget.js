var prot=require('./node_modules/protractor');
describe('Rokt_ticket_master App', function() {  //*******************Main describe method
var popuphandles,parenthandles;
var handles={};     
    it('Homepage', function() {              //************************Method to open homepage         					                       
           
            browser.driver.get('http://roktdemo.com/tm/automation.html');      //*******************homepage URL
            console.log("***********>>on home page");
 	    browser.sleep(20000);

            browser.driver.switchTo().frame(browser.driver.findElement(by.css('.wdHolder>iframe'))).then(function() {//******Switch to Widget
                     console.log("*************>>switching to frame*****************");
                     browser.driver.findElement(by.xpath('//button[@class="button submit large ui_smartsignup_buttons_next directive clickable"]')).click();});
           
            //verifying the Widget
                     browser.sleep(10000);
                     browser.driver.findElement(by.css('.ui_smartsignup.ui_module.tween_opacity')).isDisplayed	().then(function (isVisible){
                            if (isVisible) {
                               console.log("************button is visible************");
                                                                       
	   //Clicking on Attending to open fb page
								browser.driver.findElement(by.css('#ux_smartSignup_facebook_event_message_inner_buttons_attending')).click().then(function(){	//attending button		        
                                browser.sleep(5000);	
                                console.log("****************>>clicked on attending button****************");
								browser.sleep(5000);});
                           }                    
                            else {
								console.log("not visible")
                            }
                    });//attending click
          //Entering values in facebook form
					browser.driver.getAllWindowHandles().then( function (handles){
                       popuphandles=handles[1];
                       parenthandles=handles[0];
                       console.log("*************handling windows********************");
                       browser.sleep(10000);
                       console.log("*************>>moving on fb page********************");
              		   browser.driver.switchTo().window(popuphandles).then(function (){// switching to fb window
					   browser.sleep(10000);  
					   console.log("************moved to fb page****************");  

			//Entering email id
            
						browser.driver.findElement(by.css('#email')).then(function (id){//entering the email id 
							console.log('>entering id');
							browser.executeScript('document.getElementById("email").value="testuser01.automation@gmail.com";');
							browser.sleep(5000);  });//id

			//Entering password

						browser.driver.findElement(by.css('#pass')).click().then(function (pass){//entering password
						   console.log(">entering password");
						   browser.executeScript('document.getElementById("pass").value="Qait@123";');
						   browser.sleep(5000);});//pass

			//clicking on submit

                       browser.driver.findElement(by.css('#u_0_2')).click().then(function (){//clicking on login
							console.log(">Clicked on login button");
							browser.sleep(10000); });//login
						});//switch fb window
		    
                      browser.driver.switchTo().window(parenthandles).then(function (){// switching to main window
						browser.sleep(5000);
                        browser.driver.switchTo().frame(browser.driver.findElement(by.css('.wdHolder>iframe'))).then(function(){//switch               
                                   browser.sleep(5000);        			 
                                   browser.driver.findElement(by.xpath('//*[@id="ux_smartSignup_facebook_event_message_inner_buttons_send_invitation"]')).isDisplayed().then(function (isVisible){//send invitation
                                        if(isVisible)
                                           {console.log("*************send invitation button is visible on widget**************");}
                                        else
                                           {console.log("*************send invitation button is not visible*************");}  
					browser.close();});
                    });//send-invitation	                  
                  });//switch to main window
                });//window-handle
            });//frame display
     });//it-1
   


        /*     it("user already logged in the facebook",function(){//it
		  browser.sleep(5000);
                  browser.driver.get('http://roktdemo.com/tm/automation.html');      //*******************homepage URL
                  console.log("***********>>on home page");
                  browser.sleep(20000);

                  browser.driver.switchTo().frame(browser.driver.findElement(by.css('.wdHolder>iframe'))).then(function() {//******Switch to Widget
                          console.log("*************>>switching to frame");
                          browser.sleep(10000);
                          browser.driver.findElement(by.css('.ui_smartsignup.ui_module.tween_opacity')).isDisplayed().then(function (isVisible){//button visible
                                  if (isVisible) {
                                     console.log("************>>button is visible");
                                                                       
	   //******************Clicking on Attending to open fb page
           
                                     browser.driver.findElement(by.css('#ux_smartSignup_facebook_event_message_inner_buttons_attending')).click().then(function(){	//attending button		        
                                     browser.sleep(5000);	
                                     console.log("****************>>clicked on attending button");
				     browser.sleep(5000);});//attending button
                                     browser.driver.switchTo().frame(browser.driver.findElement(by.css('.wdHolder>iframe'))).then(function()                              {//frame switch
	                                        
                                             browser.sleep(5000);        			 
                                             browser.driver.findElement(by.xpath('//*[@id="ux_smartSignup_facebook_event_message_inner_buttons_send_invitation"]')).isDisplayed().then(function (isVisible){//send invitation  button
                                                                  if(isVisible)
                                                                          {console.log(">>>>>>>>send invitation is visible");}
                                                                  else
                                                                          {console.log(">>>>>>>>send invitaion not visible");}  
                                                                  browser.close();  
                                             }); //send invitation                 
                               }); //frame switch
                                                 }                    
		                   else {
                                                                       console.log("not visible");}
                                                                 
               });//button visible
            });// switch to widget
   });//it-2*/

   
});//describe




