import React from 'react';
import Header from './Header';
import City from './City';
import {withRouter} from 'react-router-dom';

class DisplayResults extends React.Component {
    

    render() {
        console.log("Printing props");
        console.log(props);
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
}

export default withRouter(DisplayResults);

/*
this goes inside the div
{this.props.location.state.results.map((result) => (
                <City
                key={result.name}
                result={result}
                />
            ))}
*/