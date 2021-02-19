import React from 'react';
import '../styles/styles.css';
import Header from './Header';
class SearchPage extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
        byCity: this.props.location.state.byCity
      }
    }
    
    handleSubmit = (e) => {
      e.preventDefault(); //prevent
      let searchFor = e.target.elements.search.value;
      console.log(searchFor);
    }

    render() {
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
            </form>
          </div>
        );
    };
  }

  export default SearchPage;
