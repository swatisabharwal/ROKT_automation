Project Info :-
ROKT automtion test suite covering 11 scenarios which includes the execution of application under different requirements and conditions. These may include the 
conditon where the Ticektmaster app being installed or not in the user facebook profile. It also covers	 the browser environment where the current user may 
be already logged into the facebook acount or may not be logged in. The test suite also covered the scenario where the user is not sure whether he/she attending 
the event or not. In that case the user shall click on maybe button on the ticketmaster app along with the state where 
the user shall be logged in or not on the facebook.
To cover the following scenarios varoius validations are covered in the test cases such as, validate if logged in or not, validate if Ticketmaster app is installed
or not. The test suite also verifies the occurance of "ticketmaster.com" link to verify that the user is able to navigate to the ticketmaster official website using
those links. Other important validations include the case where the test class verifies that the ticketmaster event is being posted on the user facebook profile and 
visible to all. Another validation includes if the friend has received the message send by the current user of ticketmaster application. 

Execution Requirements :-

Current Platform support : Windows 7

Tools Needed : 
    Nodejs (v0.12.7),
	Npm (2.11.3), 
	Protractor(1.6.1)

	
	
Steps for execution
    STEP 1: Open the initial folder containing file "testConfigration.js".
    STEP 2: Open CommandPrompt at the same location.
    STEP 3: Type command "protractor testConfiguration.js" and press enter.
    STEP 4: To run multiple test classes 
                 a)  Go to src/testCases/.  
				 b) Copy the full path along with name of required test class(eg: "./src/testCases/testMainSocialShareModuleWhenUserNotLoggedInAndAppNotInstalled.js" ).
				 c)Out of the src folder 
				 d)Open testConfiguration file and paste the name of the file in the "spec : []" attribute and follow the same process to execute 

