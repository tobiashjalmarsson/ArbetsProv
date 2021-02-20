import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.css';
import CityPop from './components/CityPop';
import ButtonPage from './components/ButtonPage';
import SearchPage from './components/SearchPage';
import AppRouter from './routers/AppRouter';
import DisplayResults from './components/DisplayResults';
import DisplayCity from './components/DisplayCity';

const path = document.getElementById('app');
ReactDOM.render(<DisplayCity result={{
    name: "London", 
    population: 2309232
}}/>, path);
/* 
ReactDOM.render(
    <DisplayResults results={[
        {name: "London", population: 2039230},
        {name: "Paris", population: 3847238},
        {name: "Tokyo", population: 39429},
        {name: "Hong Kong", population: 392482949},
        {name: "Stockholm", population: 1203922}]} />,
     document.getElementById('app')
     );
*/