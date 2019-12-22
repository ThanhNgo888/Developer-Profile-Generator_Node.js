# HW9-Developer-Profile-Generator
This will run in Node.js -> node index.js
=================================================
Create a command-line application that dynamically generates a PDF profile from a GitHub username. The application will be invoked with the following command:
node index.js
The user will be prompted for a favorite color, which will be used as the background color for cards.
The PDF will be populated with the following:

Profile image
User name
Links to the following:

User location via Google Maps
User GitHub profile
User blog

User bio
Number of public repositories
Number of followers
Number of GitHub stars
Number of users following
=====================================================================================================================
Start Building a Project:
Building node:
1. npm init -> install package.json
2. create an index.js file:
index.js
   console.log("123"); 
In terminal: test to see if it's working
node index.js
output: 123 =>Yeah!!!
3. To get user input, we will use a package call inquirer => npm inquirer(inquirer - npm) =>use the documnent for references.
npm i inquirer => install inquirer
=>check in package.json
you should see this after installed
"dependencies": {
    "inquirer": "^7.0.1"
  }
4. Buil HTML:
generateHTML.js
5. look for github API
npm i anxios
======================================================================================================================
install puppeteer => npm i puppeteer
require puppeteer