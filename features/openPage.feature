Feature: Create a cita previa
    enter the dezierd web page and look for an open spot to book a meeting

    Scenario: Book the meeting
        Given the user opens the browser and looks for the search page
        When the user searchs 'amazon'
        And the user clicks on the desired link
        Then the desired page is open
        Examples:
            | WebPage | UserName | Password |
            | Value 1 | Value 2  | Value 3  |

