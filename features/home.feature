Feature: The automation practice Website

    Scenario Outline: As a user, I can see the Authentication page

    Given I am on the home page
    When I clicked SignIn link
    Then I should see Authentication page

    Scenario Outline: As a user, add a product to the cart

    Given I have logged in with <email> and <password> 
    When I select the product 
    And Add to the cart
    Then Your shopping cart page should be displayed
    And Logout from the account

    Examples:
      | email           | password | 
      | abcd1@abcd1.com | Test@123 | 