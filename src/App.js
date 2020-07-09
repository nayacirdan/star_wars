import React, {useEffect} from 'react';
import {Switch, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import FilmPage from "./pages/FilmPage";
import StarshipPage from "./pages/StarshipPage";
import PlanetPage from "./pages/PlanetPage";
import {useDispatch} from "react-redux";
import {getAllFilms} from "./actions/actionsCreators";
import {useHistory} from 'react-router'

function App() {
    const dispatch=useDispatch();
/*    useEffect(()=>{
        dispatch(getAllFilms())
    },[])*/
    const history=useHistory();
    console.log('history',history);
  return (
    <div className="App">
      <header className="App-header">
        Welcome to STAR WARS APP
          <div onClick={()=>history.push('/')}>LOGO</div>
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
