import Actions from "../actions/actionsConstants";

const initialState={}

const currentItem=(state=initialState, action)=>{
    switch (action.type) {
        case Actions.SET_CURRENT_ITEM:{
            return action.payload
        }
        case Actions.SET_CURRENT_PLANET:{
            return {...state, currentPlanet: action.payload};
        }
        /*case Actions.GET_ITEM_INFO_BY_LINK:{
            debugger;
            console.log(action.storeName);
            console.log(state.currentFilm);
            console.log(state.currentFilm[action.storeName]);
            const updatedFilm={...state.currentFilm, [action.storeName]:action.payload}
            return {...state, currentFilm: updatedFilm}
        }*/
        default: return {...state}
    }
}
export default currentItem;