# Pet Shop (eCommerce)e2e automated tests

This repository contains five e2e automation test scripts, a qa-1123.md which contains a detailed bug report and a test cases folder which holds test cases in a PDF file

## Running the automated test

In order to run the tests on your local machine you will need to follow the steps below.

1. Clone repository https://github.com/pawpaw660/Pet-Shop-eCommerce-e2e.git to your machine
   by running the following command on terminal <p>
   <code> git clone https://github.com/pawpaw660/Pet-Shop-eCommerce-e2e.git </p>
   </code>
2. Open the cloned repository with any text editor of your choice (preferably vs code ).
3. Open terminal inside the project directory\.
4. Run the following command to initialize node package manager
   <code>npm i </code>

5. To run each spec independently, run the following command
   <code> npx cypress run --headed --Browser {enter browser name} --spec {relative path} </code> for each of the specs. (will run in headed mode) <br>
   OR

   <code> npx cypress run --Browser {enter browser name} --spec {relative path} </code> for each of the specs. (will run in headless mode)

- Replace {enter browser name } with the browser you want to run the spec on.
  Available browsers are (chrome , firefox , edge , electron)
- Replace {relative path} with the relative path to the spec you wish to run. To get a relative path to a spec <b>right click on it and click on copy relative path </b>
  <br>
  <b> - specs are found in cypress -> e2e folder </b>

#### Example: npx cypress run --headed --browser chrome --spec cypress\e2e\addingItemsToCart.cy.js

The above command will only run the spec on that particular relative path thus you will need to replace the relarive path every time you want to run a different spec.
