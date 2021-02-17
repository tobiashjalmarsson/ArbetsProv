import React from 'react';
import '../styles/styles.css';

// pass a prop subtitle="example" to the Header component to generate a subtitle
const Header = (props) => {
    return (
        <div className="header">
            <div className="container">
                <h1>City Pop</h1>
                {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>
        </div>
    );
}

export default Header;