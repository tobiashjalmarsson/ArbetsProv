import React from 'react';
import '../styles/styles.css';
import Header from './Header';
import {Link, BrowserRouter} from 'react-router-dom';
const ButtonPage = (props) => {
    /*
    the state of the link will determine how the corresponding SearchPage is rendered
    byCity = true ==> render the page that searches by city
    byCity = false ==> render the page that searches by country
    */
    return (
        
            <div>
                <div className="container">
                    <Header />
                    <div className="button__container">
                        <Link to={{
                            pathname: '/search',
                            state: {
                                byCity: true
                            }
                        }}>
                            <button className="menu__button">SEARCH BY CITY</button>
                        </Link>
                        <Link to={{
                            pathname: '/search',
                            state: {
                                byCity: false
                            }
                        }}>
                            <button className="menu__button">SEARCH BY COUNTRY</button>
                        </Link>
                    </div>
                </div>
            </div>
        
    );
}

export default ButtonPage;