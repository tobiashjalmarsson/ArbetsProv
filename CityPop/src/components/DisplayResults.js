import React from 'react';
import Header from './Header';
import City from './City';
import {withRouter} from 'react-router-dom';

const DisplayResults = (props) => {
    /*
    Component responsible for displaying a list of City's when we have searched for a country in SearchPage.js
    props.location.state.results is an array of objects of the form {name: "cityname", population: 1234}
    The array can be accessed with: props.location.state.results
    */
        return (
            <div className="container">
                <Header />
                <div>
                {props.location.state.results.map((result) => (
                    <City 
                    key={result.population}
                    result={result}
                    />
                ))}
                </div>    
            </div>
        );

}

export default withRouter(DisplayResults);
