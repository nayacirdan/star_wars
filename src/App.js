import React, {useEffect} from 'react';
import {Switch, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import FilmPage from "./pages/FilmPage";
import StarshipPage from "./pages/StarshipPage";
import PlanetPage from "./pages/PlanetPage";
import {useDispatch} from "react-redux";
import {getAllFilms, getSearchedFilms, setSearchedFilmsToNull} from "./actions/actionsCreators";
import {useHistory} from 'react-router'
import Logo from "./components/Logo";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import {makeStyles} from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow'
import grey from '@material-ui/core/colors/grey'
import Container from "@material-ui/core/Container";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';



const outerTheme = createMuiTheme({
    palette: {
        primary: {
            main: yellow['A200'],
            dark: yellow['700']
        },
        darkBg: {
            main: grey[900],
            dark: '#b81d1d',

        },
    },
    typography: {

        h1: {
            fontSize: '30',
            fontWeight: 'bold',
            color: '#fff',
            marginBottom: 20,
            marginTop: 20,
            textShadow: '1px 1px 10px rgba(0, 0, 0, 1)'
        },
        h2: {
            fontSize: '25',
            color: '#fff',
            fontWeight: 'bold',
            textShadow: '1px 1px 10px rgba(0, 0, 0, 1)'
        },
        body1: {
            color: '#fff',
        }

    },
});


const useStyles = makeStyles((theme) => ({
    root: {},
    header: {
        padding: 20
    }
}));


function App() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    console.log('history', history);

    const returnToHomePage = () => {
        dispatch(setSearchedFilmsToNull())
        history.push('/')
    }
    return (
        <div className="App">
            <ThemeProvider theme={outerTheme}>
                <Container maxWidth="xl">
                    <header className={classes.header}>
                        <Grid container direction='row' alignItems='center'>
                            <Tooltip title="Home" aria-label="Home">
                                <Button>
                                    <Logo onClick={returnToHomePage} size='50' fillColorMain='#CCC'
                                          fillColorCircle='#ccc'/>
                                </Button>
                            </Tooltip>
                            <Typography variant="body1">Star Wars APP, using <Link
                                href='https://swapi.dev/'>SWAPI</Link></Typography>
                        </Grid>

                    </header>
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route exact path='/films/:id' component={FilmPage}/>
                        <Route exact path='/starships/:id' component={StarshipPage}/>
                        <Route exact path='/planets/:id' component={PlanetPage}/>
                    </Switch>
                </Container>
            </ThemeProvider>
        </div>
    );
}

export default App;
