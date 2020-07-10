import React, {useEffect} from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Link} from "react-router-dom";
import {makeIdFromUrl} from "../utils/utils";
import {useDispatch, useSelector} from "react-redux";
import {
    getItemInfoByLink,
    setCurrentItem,
    setCurrentItemForced
} from "../actions/actionsCreators";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useLocation} from 'react-router'
import {makeStyles} from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow'


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.darkBg.main,
        marginTop: 20,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    listItem: {
        backgroundColor: theme.palette.darkBg.main
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: "none",
        '&:visited': {
            color: yellow['700']
        }
    }
}));

const LinksList = ({arr, listName}) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const location = useLocation();

    let linksArr = [];
    const currentItem = useSelector(state => state.currentItem);
    const currentItemIsFull = Object.entries(currentItem).length;

    useEffect(() => {
        if (!currentItemIsFull) {
            dispatch(setCurrentItemForced(location.pathname));
        }
    }, [dispatch, currentItemIsFull, listName, location.pathname])

    const listArrOFLinks = useSelector(state => state.currentItem[listName]);

    useEffect(() => {
        if (listArrOFLinks) {
            dispatch(getItemInfoByLink(listArrOFLinks, listName))
        }
    }, [listArrOFLinks, dispatch, listName])

    const itemsInfo = useSelector(state => state.infoLists[listName]);

    if (listName === 'allFilms') {
        const filmsSimpleArr = arr.map(el => {
            return {
                ...el,
                id: makeIdFromUrl(el.url),
            }
        });

        linksArr = filmsSimpleArr.map(film => {
            return (
                <ListItem key={`film-${film.id}`} button className={classes.listItem}>
                    <Link to={`/films/${film.id}`}
                          onClick={() => dispatch(setCurrentItem(film))}
                          className={classes.link}>
                        {film.title}
                    </Link>
                </ListItem>
            )
        })
    }
    else
        {
        if (itemsInfo) {
            linksArr = itemsInfo.map(item => {
                item.id = makeIdFromUrl(item.url)
                return (
                    <ListItem key={`${listName}-${item.id}`} button className={classes.listItem}>
                        <Link to={`/${listName}/${item.id}`}
                              onClick={() => dispatch(setCurrentItem(item))}
                              className={classes.link}>

                            {item.name ? item.name : item.title}
                        </Link>
                    </ListItem>
                )
            })
        }

    }


    return (
        <List className={classes.root}>
            {linksArr.length ? linksArr : <CircularProgress/>}
        </List>
    );
};

export default LinksList;
