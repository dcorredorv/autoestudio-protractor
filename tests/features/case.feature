Feature: Case Management

@cases
Scenario: Create a Case on Command Center
Given I selected a location
When I type 'dcorredor' as username
    And I type '1111' as password
    And I click the Sign In button
    And I click on 'officer-dashboard'
    And I click on 'cases-dashboard'
    And I create a new case
    And I open the new case 
Then the case name was saved susccesfully
    And the description was saved susccesfully
    And the event was saved susccesfully
    And the officer was assigned correctly
    And the parter was assigned susccesfully

@cases
Scenario: Attach evidence to a Case from outside of Command Center
Given user is into a case
When user clicks con +Add button
    And user clicks on Choose Files
    And user selects an evidence from his local machine
    And user clicks on open
Then The evidence is attached to the case