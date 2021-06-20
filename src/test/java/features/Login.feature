Feature: Application Login

@RegTest
Scenario: Home Page Default Login
Given User is on NetBanking landing page
When User login into Application with "jin" and "1234"
Then Home Page is populated
And Cards displayed "true"

@SmokeTest1
Scenario: Home Page Default Login
Given User is on NetBanking landing page
When User login into Application with "jhon" and "4321"
Then Home Page is populated
And Cards displayed "false"

@SmokeTest
Scenario: Home Page Default Login
Given User is on NetBanking landing page
When User login into Application with "jhon" and "4321"
Then Home Page is populated
And Cards displayed "false"

@MobileTest
Scenario: Home Page Default Login
Given User is on NetBanking landing page
When User login into Application with "jhonMobile" and "4321"
Then Home Page is populated
And Cards displayed "false"

@PortalTest
Scenario: Home Page Default Login
Given User is on NetBanking landing page
When User login into Application with "jhonWeb" and "4321"
Then Home Page is populated
And Cards displayed "false"

@RegTest
Scenario Outline: Home Page Default Login
Given User is on NetBanking landing page
When User login into Application with <Username> and password <password>
Then Home Page is populated
And Cards displayed "true"

Examples:
|Username |password|
|user1    |pass1   |
|user2    |pass2   |
|user3    |pass3   |