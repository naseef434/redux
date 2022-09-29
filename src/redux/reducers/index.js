import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./ProductReducer";

const reducer = combineReducers({
    allProducts:  productReducer
})


export default reducer