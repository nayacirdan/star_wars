import React from 'react';
import Typography from "@material-ui/core/Typography";
import LinksList from "../components/LinksList";
import {useSelector} from "react-redux";

const PlanetPage = () => {
    const currentPlanet=useSelector(state=>state.currentItem.name);
    console.log('currentPlanet',currentPlanet);
    return (
        <div>
            PlanetPAge
            <Typography variant="h1">{currentPlanet}</Typography>
            <Typography variant="h2">Films</Typography>
            <LinksList listName='films'/>

        </div>
    );
};

export default PlanetPage;
