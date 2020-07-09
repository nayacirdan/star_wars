import Actions from "../actions/actionsConstants";

const initialState={
    films:[],
    planets:[],
    starships:[]
};

const infoLists=(state=initialState, action)=>{
    switch (action.type) {
        case Actions.GET_ITEM_INFO_BY_LINK:{
            console.log(action.payload);
            return {...state, [action.storeName]:action.payload}
        }


        default: return state
    }
}

export default infoLists;