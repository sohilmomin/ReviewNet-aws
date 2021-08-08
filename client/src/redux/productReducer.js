import * as ActionTypes from './ActionTypes'

const initialState = {
    isLoading: false,
    errMess: null,
    products: []
}
export const Products = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PRODUCTS:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                products: action.payload
            }
        case ActionTypes.ADD_PRODUCT:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                products: state.products.concat(action.payload)
            }
        case ActionTypes.UPDATE_PRODUCT:
            const index = state.products.findIndex(product => product._id === action.payload._id)
            return {
                products: state.products.map(
                    (product, i) => i === index ? action.payload : product
                )
            }
        case ActionTypes.DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product._id !== action.payload._id)
            }
        case ActionTypes.PRODUCTS_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: null,
                products: []
            }
        case ActionTypes.PRODUCTS_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
                products: []
            }
        default:
            return state
    }
}