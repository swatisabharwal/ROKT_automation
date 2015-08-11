Project Information

ROKT automation test suite covers 11 scenarios which include the execution of application under different requirements and conditions. These may include the condition where the Ticektmaster app being installed or not in the user facebook profile. It also covers the browser environment where the current user may be already logged into the facebook account or may not be logged in. The test suite also covers the scenario where the user is not sure whether he/she attending the event or not, in that case the user shall click on maybe button on the ticketmaster app along with the state where the user shall be logged in or not on the facebook. To cover the following scenarios various validations are covered in the test cases such as, validate if user is logged in or not, validate if Ticketmaster app is installed or not. The test suite also verifies the occurrence of "ticketmaster.com" link to verify that the user is able to navigate to the ticketmaster official website using those links. Other important validations include the case where the test class verifies that the ticketmaster event is being posted on the user facebook profile and visible to all. Another validation includes if the friend has received the message send by the current user of ticketmaster application. 

Execution Requirements
Current Platform support: Windows 7
Tools Needed :
Nodejs v0.12.7
npm 2.11.3 
Protractor 1.6.1

Steps for execution

    STEP 1: Open the initial folder containing file "testConfigration.js"
    
    STEP 2: Open Command Prompt at the same location
    
    STEP 3: Type command "protractor testConfiguration.js" and press 		enter
    
    STEP 4: To run multiple test classes:- 

	Go to src/testCases/.  
	Copy the full path along with name of required test class(eg:   	 	“./src/testCases/testMainSocialShareModuleWhenUserNotLoggedInAndApp	NotInstalled.js" ).
	Out of the src folder, open testConfiguration file and paste the 	name of the file in the "spec : []" attribute and follow the same 	process to execute 
