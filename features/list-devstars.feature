Feature: List devstars

  @watch
  Scenario: I want to see all the devstars
    Given I am viewing the page at "/"
    Then I can see the list item "Steve Sharp"
    And I can see the image "https://avatars2.githubusercontent.com/u/13898345?v=3&s=460"
