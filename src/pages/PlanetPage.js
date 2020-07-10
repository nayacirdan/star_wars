import React from 'react';
import Typography from "@material-ui/core/Typography";
import LinksList from "../components/LinksList";
import {useSelector} from "react-redux";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {},
    container: {
        padding: 20,
        backgroundColor: 'rgba(155,155,155,0.13)',
        marginBottom: 100
    },
}));

const PlanetPage = () => {
    const classes = useStyles();
    const currentPlanet = useSelector(state => state.currentItem.name);
    return (
        <Container>
            <Grid container direction='column' justify='center' alignItems='center' className={classes.container}>
                <Typography variant="h1">Planet: {currentPlanet}</Typography>
                <Typography variant="h2">Films:</Typography>
                <LinksList listName='films'/>
            </Grid>
        </Container>
    );
};

export default PlanetPage;
