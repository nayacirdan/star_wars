import Actions from "../actions/actionsConstants";

const initialState={}

const currentItem=(state=initialState, action)=>{
    switch (action.type) {
        case Actions.SET_CURRENT_ITEM:{
            return action.payload
        }
        case Actions.SET_CURRENT_ITEM_FORCED:{
            return action.payload
        }

        default: return {...state}
    }
}
export default currentItem;