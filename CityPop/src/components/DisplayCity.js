import React from 'react';
import '../styles/styles.css';
import Header from './Header';
const DisplayCity = (props) => {
    return (
        <div>
            <div className="container">
                <Header subtitle={props.result.name}/>
                <div className="population__container">
                    <p className="population__txt">Population</p>
                    <p className="population__num">{props.result.population}</p>
                </div>
            </div>
        </div>
    );
}

export default DisplayCity;