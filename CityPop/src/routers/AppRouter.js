import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import ButtonPage from '../components/ButtonPage';
import NotFound from '../components/NotFound';
import SearchPage from '../components/SearchPage';
import DisplayResults from '../components/DisplayResults';
import DisplayCity from '../components/DisplayCity';


/*
Main router used for navigating between components.
*/
const AppRouter = () => (
    <BrowserRouter>
            <Switch>
                <Route path="/" component={ButtonPage} exact={true}/>
                <Route path="/search" component={SearchPage} exact={true} />
                <Route path="/display_results" component={DisplayResults} exact={true} />
                <Route path="/display_city" component={DisplayCity} exact={true} />
                <Route component={NotFound}/>
            </Switch>
    </BrowserRouter>
);

export default AppRouter;