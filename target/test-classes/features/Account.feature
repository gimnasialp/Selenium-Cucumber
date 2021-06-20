Feature: Portal Login

Background:
Given validate the browser
When Browser is triggered
Then Check if browser is started

@SanityTests
Scenario: Home Page Default Login
Given User is on NetBanking landing page
When User login into Application with "jin" and "1234"
Then Home Page is populated
And Cards displayed "true"