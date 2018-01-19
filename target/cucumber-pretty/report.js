$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("dailyroutine.feature");
formatter.feature({
  "line": 1,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters \"\u003cprice_right\u003e\" and \"\u003cCarat_left\u003e\" and \"\u003cColor_right_param\u003e\" and  \"\u003cCut_right_param\u003e\" and \"\u003cClarity_right_param\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Message displayed Search Successful",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Application should be closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "price_right",
        "Carat_left",
        "Color_right_param",
        "Cut_right_param",
        "Clarity_right_param"
      ],
      "line": 10,
      "id": "login-action;successful-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "10000",
        "1.5",
        "80",
        "180",
        "84"
      ],
      "line": 11,
      "id": "login-action;successful-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters \"10000\" and \"1.5\" and \"80\" and  \"180\" and \"84\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Message displayed Search Successful",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "Diamond_Search.Open_firefox_and_start_application()"
});
formatter.result({
  "duration": 10784419857,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10000",
      "offset": 13
    },
    {
      "val": "1.5",
      "offset": 25
    },
    {
      "val": "80",
      "offset": 35
    },
    {
      "val": "180",
      "offset": 45
    },
    {
      "val": "84",
      "offset": 55
    }
  ],
  "location": "Diamond_Search.Filter_By_Diamond_TestCase(String,String,int,int,int)"
});
formatter.result({
  "duration": 41084165302,
  "status": "passed"
});
formatter.match({
  "location": "Diamond_Search.Message_displayed_Login_Successfully()"
});
formatter.result({
  "duration": 4795230,
  "status": "passed"
});
formatter.match({
  "location": "Diamond_Search.application_should_be_closed()"
});
formatter.result({
  "duration": 1375612275,
  "status": "passed"
});
});