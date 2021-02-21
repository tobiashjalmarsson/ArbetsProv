import React from 'react';
import '../styles/styles.css';
import Header from './Header';
import {Redirect} from 'react-router-dom';
class SearchPage extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
        byCity: this.props.location.state.byCity,
        loading: false,
        navigate: false,
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
      const url = "http://api.geonames.org/searchJSON?q=london&maxRows=10&username=weknowit";
      // Get input from user
      let searchTarget = e.target.elements.search.value;
      console.log(searchTarget);
      // fetch the information from GeoNames
      fetch(url)
      .then(response => response.json())
      .then(data => this.transformData(data));

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
