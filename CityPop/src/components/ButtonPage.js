import React from 'react';
import '../styles/styles.css';
import Header from './Header';

const ButtonPage = (props) => {
    return (
        <div>
            <div className="container">
                <Header />
                <div className="button__container">
                    <button className="menu__button">SEARCH BY CITY</button>
                    <button className="menu__button">SEARCH BY COUNTRY</button>
                </div>
            </div>
        </div>
    );
}

export default ButtonPage;