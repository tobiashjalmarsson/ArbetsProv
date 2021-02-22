import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.css';
import AppRouter from './routers/AppRouter';


const path = document.getElementById('app');
ReactDOM.render(<AppRouter />, path);
