import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import ButtonPage from '../components/ButtonPage';
import CityPop from '../components/CityPop';
import NotFound from '../components/NotFound';
import SearchPage from '../components/SearchPage';
const AppRouter = () => (
    <BrowserRouter>
            <Switch>
                <Route path="/" component={ButtonPage} exact={true}/>
                <Route path="/search" component={SearchPage} exact={true}/>
                <Route component={NotFound}/>
            </Switch>
    </BrowserRouter>
);

export default AppRouter;