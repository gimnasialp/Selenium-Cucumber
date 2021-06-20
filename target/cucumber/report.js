$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search.feature");
formatter.feature({
  "line": 1,
  "name": "Search and place order for Vegetables",
  "description": "",
  "id": "search-and-place-order-for-vegetables",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Search for Items and then move to checkout page",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
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
  "name": "User searched for \u003cName\u003e Vegetable",
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
  "name": "verify selected \u003cName\u003e items are displayed in Check out page",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;",
  "rows": [
    {
      "cells": [
        "Name"
      ],
      "line": 19,
      "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;1"
    },
    {
      "cells": [
        "Brinjal"
      ],
      "line": 20,
      "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;2"
    },
    {
      "cells": [
        "Beetroot"
      ],
      "line": 21,
      "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Search for Items and then move to checkout page",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
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
  "name": "User searched for Brinjal Vegetable",
  "matchedColumns": [
    0
  ],
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
  "name": "verify selected Brinjal items are displayed in Check out page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefinitions.user_is_on_greencart_landing_page()"
});
formatter.result({
  "duration": 14548003500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 18
    }
  ],
  "location": "MyStepDefinitions.user_searched_for_something_vegetable(String)"
});
formatter.result({
  "duration": 3154641600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.added_items_to_cart()"
});
formatter.result({
  "duration": 307904100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.user_proceeded_to_checkout_for_purchase()"
});
formatter.result({
  "duration": 181762300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 16
    }
  ],
  "location": "MyStepDefinitions.verify_selected_items_are_displayed_in_check_out_page(String)"
});
formatter.result({
  "duration": 53822500,
  "status": "passed"
});
formatter.after({
  "duration": 486375800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search for Items and then move to checkout page",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
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
  "name": "User searched for Beetroot Vegetable",
  "matchedColumns": [
    0
  ],
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
  "name": "verify selected Beetroot items are displayed in Check out page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefinitions.user_is_on_greencart_landing_page()"
});
formatter.result({
  "duration": 5908388000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beetroot",
      "offset": 18
    }
  ],
  "location": "MyStepDefinitions.user_searched_for_something_vegetable(String)"
});
formatter.result({
  "duration": 3175557500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.added_items_to_cart()"
});
formatter.result({
  "duration": 246281400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.user_proceeded_to_checkout_for_purchase()"
});
formatter.result({
  "duration": 197556100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beetroot",
      "offset": 16
    }
  ],
  "location": "MyStepDefinitions.verify_selected_items_are_displayed_in_check_out_page(String)"
});
formatter.result({
  "duration": 46204400,
  "status": "passed"
});
formatter.after({
  "duration": 476139800,
  "status": "passed"
});
});