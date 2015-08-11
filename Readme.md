Project Information

ROKT automation test suite covers 11 scenarios which include the execution of application under different requirements and conditions. These may include the condition where the Ticektmaster app being installed or not in the user facebook profile. It also covers the browser environment where the current user may be already logged into the facebook account or may not be logged in. The test suite also covers the scenario where the user is not sure whether he/she attending the event or not, in that case the user shall click on maybe button on the ticketmaster app along with the state where the user shall be logged in or not on the facebook. To cover the following scenarios various validations are covered in the test cases such as, validate if user is logged in or not, validate if Ticketmaster app is installed or not. The test suite also verifies the occurrence of "ticketmaster.com" link to verify that the user is able to navigate to the ticketmaster official website using those links. Other important validations include the case where the test class verifies that the ticketmaster event is being posted on the user facebook profile and visible to all. Another validation includes if the friend has received the message send by the current user of ticketmaster application. 

Execution Requirements
Current Platform support: Windows 7
Tools Needed :
Nodejs v0.12.7
npm 2.11.3 
Protractor 1.6.1
protractor-html-screenshot-reporter

Steps for execution
Once you clone this repository, follow the steps below for executing the scripts

    STEP 1: Open the initial folder containing file "testConfigration.js"
    
    STEP 2: Provide path of the test class to be executed in testConfigration.js file by updating the entry 'specs', for example ----> ['./src/testCases/testMainSocialShareModuleWhenUserIsAlreadyLoggedInAndAppInstalled.js']. Change the file name based on scenario you want to execute (all test classes are placed in /src/testCases folder)
    
    STEP 2: Open Command Prompt at the same location
    
    STEP 3: Type command "protractor testConfiguration.js" and press enter
    
    Execution for the desired test scenario will be started. Once the execution completes, a folder named 'output' gets generated in the root folder of project (/ROKT_automation) inside which a report.html file is created - the execution report in an easily readable HTML format
   
    STEP 4: To run multiple test classes one after the other, just add paths to all test classes separated by a ',' (comma) against the same entry 'specs' inside testConfiguration.js and remaining process is the same
