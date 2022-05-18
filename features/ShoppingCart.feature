Feature: The Automation practice shopping cart Website

  Scenario Outline: As a user, I can log into and add the product to cart and navigate till Payment methods

    Given I am on the Shopping Cart page <email> and <password>
    When Click Summary Proceed to Checkout button
    And Navigate to Address
    And Navigate to Shipping and check the checkbox
    And Click Shipping checkout button
    Then I should see a payment methods

    Examples:
      | email           | password  | username    |
      | abcd1@abcd1.com | Test@123  | John Miller |
