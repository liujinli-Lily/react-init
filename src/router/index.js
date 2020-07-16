import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import asyncComponent from "../utils/asyncComponents";
import home from "../views/home/home";
const form = asyncComponent(() => import("../views/form/index"));
const demo = asyncComponent(() => import("../views/demo/index"));


const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={home}/>
            <Route exact path="/form" component={form}/>
            <Route exact path="/demo" component={demo}/>
        </Switch>
    </BrowserRouter>
);


export default BasicRoute;
