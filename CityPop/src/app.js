import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.css';
import CityPop from './components/CityPop';
import ButtonPage from './components/ButtonPage';
import SearchPage from './components/SearchPage';
import AppRouter from './routers/AppRouter';

ReactDOM.render(<AppRouter />, document.getElementById('app'));
