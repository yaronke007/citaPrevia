Feature: Log in to the desierd page
    enter the desierd web page and look for an open spot to book a meeting

    Scenario: Login to the page
        Given the user opens the browser and looks for the search page
        When the user searchs 'amazon'
        And the user clicks on the desired link
        Then the desired page is open
        And the user go to the login page
        And the user enter login name '' and password ''
        Then the user is logged in to his profile

