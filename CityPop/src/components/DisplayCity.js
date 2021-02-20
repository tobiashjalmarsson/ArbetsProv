import React from 'react';
import '../styles/styles.css';
import Header from './Header';
import {withRouter} from 'react-router-dom';
const DisplayCity = (props) => {
    console.log(props.location.state.result.name);
    return (
        <div>
            <div className="container">
                <Header 
                subtitle={props.location.state.result.name}
                />
                <div className="population__container">
                    <p className="population__txt">Population</p>
                    <p className="population__num">
                    {props.location.state.result.population}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default withRouter(DisplayCity);
