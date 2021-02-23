# CityPop

## Description
CityPop is a webapplication used for finding the population of citys based on the search of a city or a country which will display a number of cities to choose from (the 10 largest of said country).

The application was developed with React.JS and the API GeoNames.
## TODO
- Update dependencies

## Table of Contents
- Installation
- Usage
- Components
- Contributors
## Installation
### Dependencies
- babel-cli (6.24.1)
- babel-core (6.25.0)
- babel-loader (7.1.1)
- babel-plugin-transform-class-properties (6.24.1)
- babel-preset-env (1.5.2)
- babel-preset-react (6.24.1)
- css-loader (0.28.4)
- live-server (^1.2.0)
- normalize.css (7.0.0)
- react (15.6.1)
- react-dom (15.6.1)
- react-modal (2.2.2)
- react-router-dom (^5.2.0)
- style-loader (0.18.2)
- validator (8.0.0)
- webpack (^3.1.0)
- webpack-dev-server (2.5.1)

### Setting up the project
- Step 1: Clone the repository to your local machine
- Step 2: Install a package manager such as yarn or npm (https://www.npmjs.com/get-npm)
- Step 3: Navigate into the directory named CityPop in the cloned repository with the Node.js command prompt or another suitable prompt.
- Step 4: run "npm install" or "yarn install" to install the dependencies that the project requires.
- Step 5: run "npm run dev-server" or "yarn run dev-server" to run the development enviroment.
- Step 6: Open the port prompted in your prompt for example : "Project is running at http://localhost:8080/" then open http://localhost:8080/ in your browser.
- Step 7: Modify the components and add functionality!


## Usage
### To search for a specific city
Click on "SEARCH BY CITY", then enter the name of a city, for example "Gothenburg" or "Vienna", then the population of said city will be displayed on a new page.

### To search for cities in a country
Click on "SEARCH BY COUNTRY", then enter the name of a country, for example "Sweden", then a list of the ten largest cities in said country will be displayed, where the one on the top is the largest. Then click on the name of the city to display its population.

If you have entered an invalid name of a city or country, an error message will be displayed below the search bar.
## Components
### app.js
Responsible for rendering the React components to the DOM.

### styles.css
Contains the styling for the entire app.

### ButtonPage.js
The starting page of the application, from here you can choose to either search for a city or a country.

### SearchPage.js
Responsible for all the logic related to searching and error handling.
- handleSubmit() : Takes the input from the text field in the application. Fetches the data from the API and formats it with transformData.
- formatURL() : Takes the search input from the text field and checks if it's valid. If it is it returns an URL to use for calling the API. It can also set error messages and stores the country we have searched for (if we haven't searched for a city).
- transformData() : Takes the retrieved data fro the API and adds it to the state of the component, also sets error messages/country name as states.

### DisplayCity.js
Displays a the view of a citys population either from searching said city or clicking it in the list after searching for a country in SearchPage.js.

### City.js
The citys that are displayed in a list after searching for a country in SearchPage.js.

### DisplayResults.js
Responsible for displaying the list of citys after searching for a country. It uses City.js to display each indivdual city.

### Header.js
Component responsible for displaying the Header on every single page, the header consists of the text CityPop and an optional subtitle.

### NotFound.js
Responsible for rendering a very basic 404 page when the router have received an invalid route. Also contains a link back to the starting page.

### data/countries.json
Contains a list of available countries with corresponding country codes that are used to convert a search term to a code that can be used when creating the URL that communicates with the API.

### AppRouter.js
Responsible for the routing between components in the application.
## Contributors
Tobias Hjalmarsson
