import { combineReducers } from "redux";
import loaderReducer from "./loader";
import languageReducer from "./language";
const combineReducer = combineReducers({
    language:languageReducer,
    loader:loaderReducer
})

export default combineReducer