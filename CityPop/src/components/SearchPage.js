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
        displayResults: false,
        results: []
      }
    }
    
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
        displayResults: true
      });
    }

    render() {
      if (this.state.displayResults === true) {
        console.log("Trying to redirect");
        return (<Redirect 
        to={{
          pathname: "/display_results",
          state: {
            results: this.state.results
          }
        }}
        />);
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
