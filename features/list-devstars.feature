Feature: List devstars

  @watch
  Scenario: I want to see all the devstars
    Given I am viewing the page at "/"
    Then I can see the list item "Steve Sharp"
