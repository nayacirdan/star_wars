import React, {useEffect} from 'react';
import TextField from "@material-ui/core/TextField";
import LinksList from "../components/LinksList";
import {useDispatch, useSelector} from "react-redux";
import {getAllFilms, getSearchedFilms} from "../actions/actionsCreators";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useHistory} from 'react-router'
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow'
import grey from '@material-ui/core/colors/grey'

const useStyles = makeStyles((theme) => ({
    root: {
    },
    container:{
        padding:20,
        backgroundColor:'rgba(155,155,155,0.13)',
        marginBottom:100
    },
    searchForm:{
        '& > *': {
            width: '45ch',
        },
    },
    searchInput:{

    }
}));

const HomePage = () => {
    const dispatch=useDispatch();
    const history=useHistory();
    const classes=useStyles();
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
        <Container>
            <Grid container direction='column' justify='center' alignItems='center' className={classes.container}>
                <form noValidate autoComplete="off" className={classes.searchForm}>
                    <TextField id="search-field"
                               label="Type film name..."
                               onChange={(ev)=>handleChange(ev)}
                               className={classes.searchInput}

                               />
                </form>

                {searchedFilms? <LinksList arr={searchedFilms} listName='allFilms'/> : (
                    allFilms? <LinksList arr={allFilms} listName='allFilms'/>:<CircularProgress />)}
            </Grid>

        </Container>
    );
};

export default HomePage;
