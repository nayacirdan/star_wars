import Actions from "./actionsConstants";
import axios from "axios";

export const getAllFilms=()=>(dispatch)=>{
    debugger;
    console.log('action');

    axios.get('https://swapi.dev/api/films/')
        .then((response)=>{
            dispatch({type:Actions.GET_ALL_FILMS, payload:response.data})
        });
}

export const setCurrentFilm=(film)=>(dispatch)=>{
    dispatch({type:Actions.SET_CURRENT_FILM, payload: film})
}

export const setCurrentPlanet=(planet)=>(dispatch)=>{
    dispatch({type:Actions.SET_CURRENT_PLANET, payload: planet})
}
export const setCurrentItem=(item)=>(dispatch)=>{
    dispatch({type:Actions.SET_CURRENT_ITEM, payload: item})
}
export const setCurrentItemForced=(locationPath)=>(dispatch)=>{
    debugger;
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
        console.log('promisesRes',res);
        itemInfoArr=res.map(el=>el);
        console.log('itemInfoArr11111',itemInfoArr);
        dispatch({type:Actions.GET_ITEM_INFO_BY_LINK, payload:itemInfoArr, storeName:listName})
    });
}
