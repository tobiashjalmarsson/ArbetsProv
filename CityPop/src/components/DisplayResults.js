import React from 'react';
import Header from './Header';
import City from './City';
import {withRouter} from 'react-router-dom';

const DisplayResults = (props) => {

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
