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

/*TODO
Fix search for one city,
Also look over the api,
comment code,
write documentation
*/

const path = document.getElementById('app');
ReactDOM.render(<AppRouter />, path);
