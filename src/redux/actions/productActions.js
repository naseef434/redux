import {ActionTypes} from '../contants/action-types'

export const setProducts = (products) => {

    return {
        type :ActionTypes.SET_PRODUCT,
        payload : products
    }

}

export const SELECTED_PRODUCT = (product) => {

    return {
        type :ActionTypes.SELECTED_PRODUCT ,
        payload : product
    }

}

// export const REMOVE_SELECTED_PRODUT = (product) => {

//     return {
//         type : REMOVE_SELECTED_PRODUT,
//         payload : products
//     }

// }