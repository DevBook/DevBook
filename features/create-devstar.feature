Feature: New Dev-Star

@watch
  Scenario: I want to add a new dev-star
    Given I am viewing the page at "/add-dev-star"
    When I enter "Peter" into the "name" input
    And I enter "21" into the "age" input
    And I enter "Java Warrior" into the "story" input
    And I enter "https://avatars3.githubusercontent.com/u/3063500?v=3&s=460" into the "image" input
    And I click on the input with value "Create Dev-Star"
    Then I am redirected to the "/" page
    And I can see the list item "Peter"
