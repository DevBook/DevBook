Feature: View profile
  As a user,
  I want to see the image of a particular devstar
  So that I can get to know the devstars better

@watch
  Scenario: I want to a devstar's profile
    Given I am viewing the page at "/"
    When I click on the image "https://avatars2.githubusercontent.com/u/13898345?v=3&s=460"
    Then I am redirected to the "/devstars/3" page
    And I can see the list item "29"
    And I can see the list item "I am from Zimbabwe."
