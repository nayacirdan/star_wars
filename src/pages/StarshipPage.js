import React from 'react';
import {useSelector} from "react-redux";
import Typography from "@material-ui/core/Typography";
import LinksList from "../components/LinksList";

const StarshipPage = () => {
    debugger;
    const currentStarship=useSelector(state=>state.currentItem.name);
    return (
        <div>
            StarshipPage
            <Typography variant="h1">Starship: {currentStarship}</Typography>
            <Typography variant="h2">Films</Typography>
            <LinksList listName='films'/>
        </div>
    );
};

export default StarshipPage;
