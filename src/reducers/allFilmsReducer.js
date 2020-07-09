import Actions from "../actions/actionsConstants";

const initialState=[]

const allFilms=(state=initialState, action)=>{
    switch (action.type) {
        case Actions.GET_ALL_FILMS:{
            debugger;
            console.log(action.payload.results);
            return action.payload.results
        }
        default: return state;
    }
}

export default allFilms;