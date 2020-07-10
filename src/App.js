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

function App() {
    const dispatch = useDispatch();
    /*    useEffect(()=>{
            dispatch(getAllFilms())
        },[])*/
    const history = useHistory();
    console.log('history', history);

    const returnToHomePage=()=>{
        dispatch(setSearchedFilmsToNull())
        history.push('/')
    }
    return (
        <div className="App">
            <header className="App-header">
                Welcome to STAR WARS APP
                <Tooltip title="Home" aria-label="Home">
                    <Button>
                        <Logo onClick={returnToHomePage} size='50' fillColorMain='#CCC' fillColorCircle='#ccc'/>
                    </Button>
                </Tooltip>
            </header>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/films/:id' component={FilmPage}/>
                <Route exact path='/starships/:id' component={StarshipPage}/>
                <Route exact path='/planets/:id' component={PlanetPage}/>
            </Switch>
        </div>
    );
}

export default App;
