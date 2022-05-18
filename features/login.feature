Feature: The automation practice Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <email> and <password>
    Then I should see a My Account page user <username>

    Examples:
      | email           | password  | username    |
      | abcd1@abcd1.com | Test@123  | John Miller |
