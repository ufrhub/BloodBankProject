import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomeComponent/Home';

function Body() {


    return (
        <Switch>
            <Route path="/" component={HomePage} exact />
        </Switch>
    );
};

export default Body;