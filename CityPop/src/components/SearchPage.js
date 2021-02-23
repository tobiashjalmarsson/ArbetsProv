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
        byCity: this.props.location.state.byCity,// determines if we are searching for a single city or a country
        loading: false, // set to true to display the loading indicator.
        error: '', // Set to an error message when we have received an error. Empty indicates no errors
        navigate: false, // navigate = true when we are navigating from the page
        results: [], // results: store for search results in an array of objects of the form {name: "cityname", population: 1234}
        country: '' // If we search for a country, this is passed to the next component to display the country name
      }
    }
    // handleSubmit is responsible for getting data from the form and using that
    // to retrieve data from the GeoNames API.
    handleSubmit = (e) => {
      // When we submit an search term we set loading to true and error to the empty string (which indicates false)
      this.setState({
        loading: true,
        error: '',
      });
      // Preventing reload of page
      e.preventDefault();
      // Get input from user 
      
      let searchTarget = e.target.elements.search.value;
      // Result returns an object { url: "www.exampleurl.com", error: "I coulden't find the city"}
      // if the error is an empty string this indicates that we had no errors
      // if its not then we received an error while trying to format the string.
      let result = this.formatURL(searchTarget);
      // If we didn't receive an error from formatURL then fetch the data from the url we
      // received from result. then call transformData with the data.
      if(result.error === '') {
        fetch(result.url)
        .then(response => response.json())
        .then(data => this.transformData(data, result));
        
      }
      // If we received an error from this.formatURL, stop loading and set the error message
      else {
        this.setState({
          error: result.error,
          loading: false
        });
      }
      
    }
    // Function to format the URL string according to what we are searching for, e.g City or country
    formatURL(search){
      // If we are searching for a singly city, we format the url accordingly and set errors to false
      // since it that case errors will be handled in transformData()
      if(this.state.byCity === true){
        // check if we received an empty string or an number instead of the name of a city
        if (search.trim() === "" || !isNaN(parseInt(search))) {
          return ({url: '', error: 'Please enter the name of a city.', country: ''});
        } else {
          return ({url: `http://api.geonames.org/searchJSON?q=${search}&maxRows=1&username=weknowit`, error: '', country: ''});
        }
      }
      else {
        //If we search for a country, we use the json file in src/data/countries.json to find the corresponding code
        // Then when we find a match we return the correctly formated string.
        // NOTE: This could be changed to a binary search since it could be viewed as a sorted list.
        // However this won't have any big performance issues since the list size is fixed and handled
        // by the clients browser.
        for(let i = 0; i < codes.length; i++){
          // compare the search input to the names in data/countries.json
          // if we find a match (capitalization dosen't matter) we return the corresponding country code
          // and use that to format the string.
          if(search.toLowerCase() === codes[i].name.toLowerCase()) {
            return ({
              url: `http://api.geonames.org/searchJSON?country=${codes[i].code}&cities=cities15000&maxRows=10&username=weknowit`,
              error: '',
              country: search
            });
          }
        }
        // If we can't find any matching results when searching for a country, we set the url to the empty string
        // and set the error message.
        return ({
          url: '',
          error: "Coulden't find matching country, please try again.",
          country: ''
        });
      }
    }

    // Creates and pushed objects to our results state.
    transformData(data, result){
      // data.geonames.length is 0 when we havent found any matching search results.
      // in that case we set loading to false and set the error message.
      if (data.geonames.length === 0) {
        this.setState({
          loading: false,
          error: "Coulden't find any matching citys, please try again."
        });
      }
      else {
        // if the length of data.geonames is not zero, then we found results and can procede accordingly
        let searchResult = [];
        for(let i = 0; i < data.geonames.length; i++){
          // Create an Array of objects with the results
          searchResult.push(
            {
              name: data.geonames[i].name,
              population: data.geonames[i].population
            }
          );
        }
        // Sorting the objects in decending order based on population.
        searchResult.sort((a,b) => (a.population > b.population) ? -1 : 1);
        // When we are done with transforming and adding the data
        // we update the loading to false to remove the loading indicator
        // we set the result state and navigate to the next screen to display the
        this.setState({
          results: searchResult,
          loading: false,
          navigate: true,
          country: result.country
        });
      }
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
              results: this.state.results,
              country: this.state.country
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
                <button className="search__button">Search</button>
              </div>
              {this.state.loading &&  <div className="population__container">
                                        <p className="loading__message">Loading...</p>
                                      </div>}
              {this.state.error && <div className="population__container">
                                      <p className="error__message">Error.. {this.state.error}</p>
                                    </div>}
            </form>
          </div>
        );
    };
  }

  export default SearchPage;
