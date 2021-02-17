import React from 'react';
import '../styles/styles.css';
import Header from './Header';
class SearchPage extends React.Component {

    render() {
      return(
          <div className="container">
            <Header subtitle="SEARCH BY CITY"/>
            <form>
              <div>
                <input type="text" className="search__input"></input>
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
