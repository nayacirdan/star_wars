import Actions from "../actions/actionsConstants";

const initialState=[];

const searchedFilms=(state=initialState, action)=>{
    switch (action.type) {
        case Actions.GET_SEARCHED_FILMS: {
            return action.payload
        }
        case Actions.SET_SEARCHED_FILMS_TO_NULL:{
            return []
        }
        
        default: return state
    }
}
export default searchedFilms;