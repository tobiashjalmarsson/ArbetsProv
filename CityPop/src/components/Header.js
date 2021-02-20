import React from 'react';
import '../styles/styles.css';
import { Link } from 'react-router-dom';

// pass a prop subtitle="example" to the Header component to generate a subtitle
const Header = (props) => {
    return (
            <div className="header">
                <div className="container">
                    <Link to="/"
                    className="link"
                    >
                        <h1>City Pop</h1>
                    </Link>
                    {props.subtitle && <h2>{props.subtitle}</h2>}
                </div>
            </div>
        
    );
}

export default Header;