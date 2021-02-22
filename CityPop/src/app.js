import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.css';
import ButtonPage from './components/ButtonPage';
import SearchPage from './components/SearchPage';
import AppRouter from './routers/AppRouter';
import DisplayResults from './components/DisplayResults';
import DisplayCity from './components/DisplayCity';

/*TODO
Fix search for one city, [X]
Also look over the api, [X]
comment code, [X]
handle errors on search, 
    - Two cases
        - Incorrect country[X]
        - Incorrect city[X]
Refactor SearchPage.js
write documentation
*/

const path = document.getElementById('app');
ReactDOM.render(<AppRouter />, path);
