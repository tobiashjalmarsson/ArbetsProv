import React from 'react';
import '../styles/styles.css';
class City extends React.Component {

    render() {
        return (
            <div className="city__container"
            onClick={() => this.props.handleClick(this.props.result)}
            >
            <p className="city__content">
                {this.props.result.name}
            </p>
            </div>
        );
}
};

export default City;