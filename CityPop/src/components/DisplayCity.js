import React from 'react';
import '../styles/styles.css';
import Header from './Header';
import {withRouter} from 'react-router-dom';
const DisplayCity = (props) => {
    /*
    The component resposible for Displaying a Citys population and name after search is complete.
    - name can be accessed with: props.location.state.result.name
    - population can be accessed with: props.location.state.result.population
    */

    // Function to formate the population from something like 1515017 to 1 515 017 to make it more readable
   function formatPopulation(population){
    let popString = "" + population;
    let newPop = "";
    let last = 0;
    for(let i = 1; i <= popString.length; i++){
        // We are going to add every third number to the new string
        if(Number.isInteger(i / 3)){
            // adds the 3 number between the last added numbers and the current index, also adds in a space
            newPop = newPop.replace(/^/," " + popString.slice(popString.length - i, popString.length - last));
            // Updates last so we can keep track of which numbers we have added
            last = i;
        }
    }
    // adds the last numbers that wherent added, if we have 1515017, 1 will be added here.
    newPop = newPop.replace(/^/,popString.slice(0, popString.length - last));
    return newPop;
   }
    return (
        <div>
            <div className="container">
                <Header 
                subtitle={props.location.state.result.name}
                />
                <div className="population__container">
                    <p className="population__txt">Population</p>
                    <p className="population__num">
                    {formatPopulation(props.location.state.result.population)}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default withRouter(DisplayCity);
