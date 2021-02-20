import React from 'react';
import Header from './Header';
import City from './City';

const DisplayResults = (props) => {
    return (
        <div className="container">
            <Header />
            <div>
            {props.results.map((result) => (
                <City
                key={result.name}
                name={result.name}
                />
            ))}
            </div>    
        </div>
    );
}

export default DisplayResults;