import React from 'react';
import {useSelector} from "react-redux";
import Typography from "@material-ui/core/Typography";
import LinksList from "../components/LinksList";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
    },
    container:{
        padding:20,
        backgroundColor:'rgba(155,155,155,0.13)',
        marginBottom:100
    },
}));

const FilmPage = () => {
    const classes=useStyles();
    const currentFilm = useSelector(state => state.currentItem.title)
    return (
            <Container>
                <Typography variant="h1">Film: {currentFilm}</Typography >
                <Grid container direction='row' justify='space-around'  className={classes.container} >
                    <Grid item style={{width:'30%'}}>
                        <Typography variant="h2">Planets:</Typography>
                        <LinksList listName='planets'/>
                    </Grid>
                    <Grid item style={{width:'30%'}}>
                        <Typography variant="h2">Starships:</Typography>
                        <LinksList listName='starships'/>
                    </Grid>
                </Grid>
            </Container>
    );
};

export default FilmPage;
