$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("dailyroutine.feature");
formatter.feature({
  "id": "login-action",
  "description": "",
  "name": "Login Action",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "login-action;successful-login-with-valid-credentials",
  "description": "",
  "name": "Successful Login with Valid Credentials",
  "keyword": "Scenario Outline",
  "line": 3,
  "type": "scenario_outline"
});
formatter.step({
  "name": "Open firefox and start application",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "User enters \"\u003cprice_left\u003e\" and \"\u003cCarat_left\u003e\" and \"\u003cColor_left_param\u003e\" and \"\u003cColor_right_param\u003e\" and \"\u003cCut_left_param\u003e\" and \"\u003cCut_right_param\u003e\" and \"\u003cClarity_left_param\u003e\" and \"\u003cClarity_right_param\u003e\" and \"\u003cflo_left_param\u003e\" and \"\u003cflo_right_param\u003e\"",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "Message displayed Search Successful",
  "keyword": "Then ",
  "line": 6
});
formatter.step({
  "name": "Application should be closed",
  "keyword": "Then ",
  "line": 7
});
formatter.examples({
  "id": "login-action;successful-login-with-valid-credentials;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 9,
  "rows": [
    {
      "id": "login-action;successful-login-with-valid-credentials;;1",
      "cells": [
        "price_left",
        "Carat_left",
        "Color_left_param",
        "Color_right_param",
        "Cut_left_param",
        "Cut_right_param",
        "Clarity_left_param",
        "Clarity_right_param",
        "flo_left_param",
        "flo_right_param"
      ],
      "line": 10
    },
    {
      "id": "login-action;successful-login-with-valid-credentials;;2",
      "cells": [
        "9500",
        ".90",
        "-120",
        "120",
        "-100",
        "100",
        "-128",
        "128",
        "-150",
        "150"
      ],
      "line": 11
    }
  ]
});
formatter.scenario({
  "id": "login-action;successful-login-with-valid-credentials;;2",
  "description": "",
  "name": "Successful Login with Valid Credentials",
  "keyword": "Scenario Outline",
  "line": 11,
  "type": "scenario"
});
formatter.step({
  "name": "Open firefox and start application",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "User enters \"9500\" and \".90\" and \"-120\" and \"120\" and \"-100\" and \"100\" and \"-128\" and \"128\" and \"-150\" and \"150\"",
  "keyword": "When ",
  "line": 5,
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ]
});
formatter.step({
  "name": "Message displayed Search Successful",
  "keyword": "Then ",
  "line": 6
});
formatter.step({
  "name": "Application should be closed",
  "keyword": "Then ",
  "line": 7
});
formatter.match({
  "location": "Diamond_Search.Open_firefox_and_start_application()"
});
formatter.result({
  "duration": 14301288075,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9500",
      "offset": 13
    },
    {
      "val": ".90",
      "offset": 24
    },
    {
      "val": "-120",
      "offset": 34
    },
    {
      "val": "120",
      "offset": 45
    },
    {
      "val": "-100",
      "offset": 55
    },
    {
      "val": "100",
      "offset": 66
    },
    {
      "val": "-128",
      "offset": 76
    },
    {
      "val": "128",
      "offset": 87
    },
    {
      "val": "-150",
      "offset": 97
    },
    {
      "val": "150",
      "offset": 108
    }
  ],
  "location": "Diamond_Search.Filter_By_Diamond_TestCase(String,String,int,int,int,int,int,int,int,int)"
});
formatter.result({
  "duration": 17563007570,
  "status": "passed"
});
formatter.match({
  "location": "Diamond_Search.Message_displayed_Login_Successfully()"
});
formatter.result({
  "duration": 417852,
  "status": "passed"
});
formatter.match({
  "location": "Diamond_Search.application_should_be_closed()"
});
formatter.result({
  "duration": 1268766196,
  "status": "passed"
});
});