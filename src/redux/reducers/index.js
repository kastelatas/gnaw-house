import {combineReducers} from "redux";
import productsReducer from "./productsReducer";
import modalsReducer from "./modalsReducer";
import cartReducer from "./cartReducer";


export default combineReducers({
    products: productsReducer,
    modals: modalsReducer,
    cart: cartReducer
})