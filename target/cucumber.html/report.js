$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search.feature");
formatter.feature({
  "line": 1,
  "name": "Search and place order for Vegetables",
  "description": "",
  "id": "search-and-place-order-for-vegetables",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 11,
  "name": "Search for Items and then move to checkout page",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@SeleniumTest1"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on greencart Landing Page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User searched for \"Brinjal\" Vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User proceeded to Checkout for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify selected \"Brinjal\" items are displayed in Check out page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefinitions.user_is_on_greencart_landing_page()"
});
formatter.result({
  "duration": 6874902000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 19
    }
  ],
  "location": "MyStepDefinitions.user_searched_for_something_vegetable(String)"
});
formatter.result({
  "duration": 3132030699,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.added_items_to_cart()"
});
formatter.result({
  "duration": 271806200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.user_proceeded_to_checkout_for_purchase()"
});
formatter.result({
  "duration": 155340201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 17
    }
  ],
  "location": "MyStepDefinitions.verify_selected_something_items_are_displayed_in_check_out_page(String)"
});
formatter.result({
  "duration": 39870400,
  "status": "passed"
});
});