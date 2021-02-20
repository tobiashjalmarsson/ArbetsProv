import React from 'react';
import '../styles/styles.css';
import { Redirect, useHistory, Link } from 'react-router-dom';

const City = (props) => {
    return (
        <Link
        className="link"
        to={{
            pathname: '/display_city',
            state: { result: props.result }
        }}>
            <div className="city__container">
            <p className="city__content">{props.result.name}</p>
            </div>
        </Link>
        );

};

export default City;