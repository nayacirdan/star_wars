import React from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/HomePage";
import FilmPage from "../pages/FilmPage";
import StarshipPage from "../pages/StarshipPage";
import PlanetPage from "../pages/PlanetPage";

const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/films/:id' component={FilmPage}/>
            <Route exact path='/starships/:id' component={StarshipPage}/>
            <Route exact path='/planets/:id' component={PlanetPage}/>
        </Switch>
    );
};

export default AppRoutes;
