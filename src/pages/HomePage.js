import React, {useEffect} from 'react';
import TextField from "@material-ui/core/TextField";
import LinksList from "../components/LinksList";
import {useDispatch, useSelector} from "react-redux";
import {getAllFilms, getSearchedFilms} from "../actions/actionsCreators";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useHistory} from 'react-router'

const HomePage = () => {
    const dispatch=useDispatch();
    const history=useHistory();
    history.listen(()=>{
        console.log('history changed')
    })

    const handleChange=(ev)=>{
        dispatch(getSearchedFilms(ev.target.value))
    }
    useEffect(()=>{
        debugger;
        dispatch(getAllFilms())
    },[])

    const allFilms=useSelector(state=>state.allFilms);
    const searchedFilms=useSelector(state=>state.searchedFilms.results);
    debugger;
    return (
        <div>
            HomePage
            <form noValidate autoComplete="off">
                <TextField id="search-field" label="Type film name..." onChange={(ev)=>handleChange(ev)}/>
            </form>

            {searchedFilms? <LinksList arr={searchedFilms} listName='allFilms'/> : (
                allFilms? <LinksList arr={allFilms} listName='allFilms'/>:<CircularProgress />)}
        </div>
    );
};

export default HomePage;
