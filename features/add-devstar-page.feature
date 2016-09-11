Feature: Go to add dev-star page


  Scenario: I want to go to add dev-star page
    Given I am viewing the page at "/"
    When I click on the input with value "Add Dev-Star"
    Then I am redirected to the "/add-dev-star" page
    And I can see the header "Add New Dev-Star"
