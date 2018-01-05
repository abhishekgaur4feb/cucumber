Feature: Login Action

  Scenario Outline: Successful Login with Valid Credentials
    Given Open firefox and start application
    When User enters "<price_left>" and "<Carat_left>" and "<Color_left_param>" and "<Color_right_param>" and "<Cut_left_param>" and "<Cut_right_param>" and "<Clarity_left_param>" and "<Clarity_right_param>" and "<flo_left_param>" and "<flo_right_param>"
    Then Message displayed Search Successful
    Then Application should be closed

    Examples: 
      | price_left | Carat_left | Color_left_param | Color_right_param | Cut_left_param | Cut_right_param | Clarity_left_param | Clarity_right_param | flo_left_param | flo_right_param |
      |       9500 |        .90 |             -120 |               120 |           -100 |             100 |               -128 |                 128 |           -150 |             150 |
