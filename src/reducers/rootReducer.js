import {combineReducers} from "redux";
import allFilms from "./allFilmsReducer";
import currentItem from "./currentItemReducer";
import infoLists from "./InfoListsReducer";

const rootReducer=combineReducers({
        allFilms, currentItem, infoLists
}

)

export default rootReducer;