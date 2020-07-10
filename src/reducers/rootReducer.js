import {combineReducers} from "redux";
import allFilms from "./allFilmsReducer";
import currentItem from "./currentItemReducer";
import infoLists from "./InfoListsReducer";
import searchedFilms from "./searchedFilmsReducer";

const rootReducer=combineReducers({
        allFilms, currentItem, infoLists, searchedFilms
}

)

export default rootReducer;