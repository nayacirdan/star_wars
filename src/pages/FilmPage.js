import React from 'react';
import {useSelector} from "react-redux";
import Typography from "@material-ui/core/Typography";
import LinksList from "../components/LinksList";

const FilmPage = () => {
    const currentFilm=useSelector(state=>state.currentItem.currentFilm.title)
    return (
        <div>
            FilmPage
            <Typography variant="h1">{currentFilm}</Typography>
            <Typography variant="h2">Planets</Typography>
            <LinksList listName='planets'/>
            <Typography variant="h2">Starships</Typography>
            <LinksList listName='starships'/>
        </div>
    );
};

export default FilmPage;
