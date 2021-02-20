import React from 'react';
import Header from './Header';
import City from './City';
import {withRouter} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

class DisplayResults extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            displayCity: false,
            toDisplay: null
        }
    }

    handleClick(city){
        console.log("click");
        console.log(city);
        this.setState({
            toDisplay: city,
            displayCity: true
        });
    }

    render() {

        return (
            <div className="container">
                <Header />
                <div>
                {this.props.location.state.results.map((result) => (
                    <City 
                    key={result.population}
                    result={result}
                    handleClick={this.handleClick}
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