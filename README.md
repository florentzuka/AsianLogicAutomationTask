# AsianLogic - UNIX Time Converter

# <h2> Running the tests <h2>

To run the tests you will need all the dependencies installed first. <br>
Running **"npm install"** should install all of the dependencies that are in the package.json file <br>
After everything's been installed, to run the tests type "**npx cypress run**" in the terminal <br>
This will run all of the tests that are under the cypress/e2e folder, tests.cy.js file. <br>
To run a specific test use "**npx cypress run --spec** ".\cypress\e2e\The test you want.cy.js" <br>
This will run only that specific .cy file <br>
A spec cy file = files that end with **.cy.jc** are the ones that Cypress will run as tests <br>

# <h3>Cypress UI</h3>

To open up the cypress UI and run the tests from there use "**npx cypress open**"<br>

# <h3>Config & utilities</h3>

The e2e folder is the only folder that Cypress will scan to check for tests <br>
All the global and environmental variables can be found in the cypress.config.js file <br>
All the endpoints can be found in the 'endpoints.js' file <br>
Functions can be found in the 'cypress/bots' folder <br>
Schemas can be found in the 'cypress/schemas' folder <br>
Custom JOI schema types (date string) can be found in the 'joi.js' file. <br>
Other comments that help with context have been left in the code <br>

# <h2> Implementation <h2>

All the tests utilize Cypress' .request function which enables the call of an endpoint, and a custom function timestampConverter() which calls the endpoint and returns the object. The function also accept a parameter which is then put in the URL of the request.<br>
Except for the 200 Status code, the tests also check for a correct schema of the response. For the date string, I created a custom JOI schema type dateString using RegEx. In addition, some exact value assertions are also done. <br>
The tests will also throw a custom error with the status code error message if the Status code was not 200. <br>
The tests include various sanity checks like correct parameters, incorrect parameters, empty, negative etc etc.
