import * as ActionTypes from './ActionTypes'
const initialState = {
    errMess: null,
    reviews: [],
    isLoading: false
}
export const Reviews = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_REVIEWS:
            return {
                ...state,
                isLoading: false,
                reviews: action.payload
            }
        case ActionTypes.ADD_REVIEW:
            return {
                ...state,
                isLoading: false,
                reviews: state.reviews.concat(action.payload)
            }
        case ActionTypes.REVIEWS_FAILED:
            return {
                ...state,
                errMess: action.payload,
                reviews: []
            }
        case ActionTypes.REVIEWS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case ActionTypes.UPDATE_REVIEW:
            const index = state.reviews.findIndex(review => review._id === action.payload._id)
            return {
                reviews: state.reviews.map(
                    (review, i) => i === index ? action.payload : review
                )
            }
        case ActionTypes.DELETE_REVIEW:
            return {
                ...state,
                reviews: state.reviews.filter(review => review._id !== action.payload._id)
            }
        default:
            return state
    }
}