Feature: Search and place order for Vegetables

@SeleniumTest

Scenario: Search for items and validates results
Given User is on greencart Landing Page
When User searched for Cucumber Vegetable
Then "Cucumber" results are displayed

@SeleniumTest1
Scenario Outline: Search for Items and then move to checkout page
Given User is on greencart Landing Page
When User searched for <Name> Vegetable
And Added items to cart
And User proceeded to Checkout for purchase
Then verify selected <Name> items are displayed in Check out page

Examples:
|Name    |
|Brinjal |
|Beetroot|