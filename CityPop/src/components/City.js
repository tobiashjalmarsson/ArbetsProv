import React from 'react';
import '../styles/styles.css';
class City extends React.Component {

    wasClicked = () => {
        console.log(this.props.result.name);
    }

    render() {
        return (
            <div className="city__container"
            onClick={this.wasClicked}
            >
            <p className="city__content">
                {this.props.result.name}
            </p>
            </div>
        );
}
};

export default City;