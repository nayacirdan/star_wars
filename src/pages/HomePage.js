import React, {useEffect} from 'react';
import TextField from "@material-ui/core/TextField";
import LinksList from "../components/LinksList";
import {useDispatch, useSelector} from "react-redux";
import {getAllFilms} from "../actions/actionsCreators";
import CircularProgress from "@material-ui/core/CircularProgress";

const HomePage = () => {
    const dispatch=useDispatch();
    const handleChange=(ev)=>{
        console.log(ev.target.value);
    }
    useEffect(()=>{
        debugger;
        dispatch(getAllFilms())
    },[])

    const allFilms=useSelector(state=>state.allFilms);

    return (
        <div>
            HomePage
            <form noValidate autoComplete="off">
                <TextField id="search-field" label="Type film name..." onChange={(ev)=>handleChange(ev)}/>
            </form>

            {allFilms? <LinksList arr={allFilms} listName='allFilms'/>:<CircularProgress />}
        </div>
    );
};

export default HomePage;
