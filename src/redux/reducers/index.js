import {combineReducers} from "redux";
import productsReducer from "./productsReducer";
import modalsReducer from "./modalsReducer";


export default combineReducers({
    products: productsReducer,
    modals: modalsReducer
})