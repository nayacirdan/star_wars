import React from 'react';
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import Logo from "./Logo";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import {makeStyles} from "@material-ui/core/styles";
import {setSearchedFilmsToNull} from "../actions/actionsCreators";
import {useDispatch} from "react-redux";
import {useHistory} from 'react-router'

const useStyles = makeStyles((theme) => ({
    root: {},
    header: {
        padding: 20
    }
}));

const Header = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const returnToHomePage = () => {
        dispatch(setSearchedFilmsToNull())
        history.push('/')
    }

    return (
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
    );
};

export default Header;
