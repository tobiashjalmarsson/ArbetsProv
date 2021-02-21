import React from 'react';
import '../styles/styles.css';
import Header from './Header';
import codes from '../data/countries.json';
import {Redirect} from 'react-router-dom';
class SearchPage extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
        // determines if we are searching for a single city
        byCity: this.props.location.state.byCity,
        loading: false,
        // navigate = true when we are navigating from the page
        navigate: false,
        // results: store for search results on the form {name: "cityname", population: 1234}
        results: []
      }
    }

    
    // Gets input from user and fetches data from GeoNames API
    handleSubmit = (e) => {
      // Setting loading = true to display Loading...
      this.setState({
        loading: true
      });
      // Preventing reload of page
      e.preventDefault();
      // Get input from user 
      let searchTarget = e.target.elements.search.value;
      //const url = "http://api.geonames.org/searchJSON?q=london&maxRows=10&username=weknowit";
      const url = this.formatURL(searchTarget);
      console.log(searchTarget);
      // fetch the information from GeoNames
      fetch(url)
      .then(response => response.json())
      .then(data => this.transformData(data));

    }
    // Function to format the URL string according to what we are searching for, e.g City or country
    formatURL(search){
      if(this.state.byCity === true){
        return `http://api.geonames.org/searchJSON?q=${search}&maxRows=1&username=weknowit`;
      }
      else {
        //If we search for a country, we use the json file in src/data/countries.json to find the corresponding code
        // Then when we find a match we return the correctly formated string.
        for(let i = 0; i < codes.length; i++){
          if(search.toLowerCase() === codes[i].name.toLowerCase()) {
            return `http://api.geonames.org/searchJSON?country=${codes[i].code}&cities=cities15000&maxRows=10&username=weknowit`;
          }
        }
      }
    }

    // Creates and pushed objects to our results state.
    transformData(data){
      console.log(data);
      let searchResult = [];
      for(let i = 0; i < data.geonames.length; i++){
        // Create an Array of objects with the results
        searchResult.push(
          {
            name: data.geonames[i].toponymName,
            population: data.geonames[i].population
          }
        );
      }
      // Sorting the objects in decending order based on population.
      searchResult.sort((a,b) => (a.population > b.population) ? -1 : 1);

      console.log(searchResult);
      this.setState({
        results: searchResult,
        loading: false,
        navigate: true
      });
    }

    render() {

      // If we are navigating away from SearchPage.js we have two cases
      if (this.state.navigate === true) {
        // First case: if we are searching for multiple citys in a country
        // Then we navigate to DisplayResults.js and pass in the results state
        if(this.state.byCity === false) {
          return (<Redirect 
          to={{
            pathname: "/display_results",
            state: {
              results: this.state.results
            }
          }}
        />);
        }
        // Second case: if we are searching for one city in a country
        // Then we navigate to DisplayCity.js and pass in a single object
        // as the result prop.
        else {
          return (<Redirect 
            to={{
              pathname: "/display_city",
              state: {
                result: this.state.results[0]
              }
            }}
            />);
        }
      }
      return(
          <div className="container">
            {this.state.byCity? <Header subtitle="SEARCH BY CITY"/> : <Header subtitle="SEARCH BY COUNTRY"/>}
            <form onSubmit={this.handleSubmit}>
              <div>
                <input type="text" className="search__input" name="search"></input>
              </div>
              <div>
                <button className="search__button"></button>
              </div>
              {this.state.loading && <p>Loading...</p>}
            </form>
          </div>
        );
    };
  }

  export default SearchPage;
