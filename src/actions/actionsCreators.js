import Actions from "./actionsConstants";
import axios from "axios";

export const getAllFilms=()=>(dispatch)=>{
    axios.get('https://swapi.dev/api/films/')
        .then((response)=>{
            dispatch({type:Actions.GET_ALL_FILMS, payload:response.data})
        });
}

export const setCurrentItem=(item)=>(dispatch)=>{
    dispatch({type:Actions.SET_CURRENT_ITEM, payload: item})
}

export const setCurrentItemForced=(locationPath)=>(dispatch)=>{
    const apiUrl=`https://swapi.dev/api${locationPath}/`;
    axios.get(apiUrl)
        .then((response)=>{
            dispatch({type:Actions.SET_CURRENT_ITEM_FORCED, payload:response.data})
        });
}

export const getItemInfoByLink=(linksArr, listName)=>(dispatch)=>{
    const promises=linksArr.map(el=>{
       return axios.get(el)
            .then(res=>res.data);
    });
    let itemInfoArr=[]
    Promise.all(promises).then(res=> {
        itemInfoArr=res.map(el=>el);
        dispatch({type:Actions.GET_ITEM_INFO_BY_LINK, payload:itemInfoArr, storeName:listName})
    });
}

export const getSearchedFilms=(searchValue)=>(dispatch)=>{
    const apiUrl=`https://swapi.dev/api/films/?search=${searchValue}`;
    axios.get(apiUrl)
        .then((response)=>{
            dispatch({type:Actions.GET_SEARCHED_FILMS, payload:response.data})
        });
}

export const setSearchedFilmsToNull=()=>(dispatch)=>{
    dispatch({type:Actions.SET_SEARCHED_FILMS_TO_NULL});
}