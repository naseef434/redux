import { ActionTypes } from "../contants/action-types";

const INITIAL_STATE =  {
    products : [{
        id: 1,
        title: "Naseef",
        category: "Programmer"
    }]
}
export const productReducer = (state = INITIAL_STATE, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SET_PRODUCT : 
            
            return state
    
        default:
            return state
    }
}