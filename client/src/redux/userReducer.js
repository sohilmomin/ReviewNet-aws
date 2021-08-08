import * as ActionTypes from './ActionTypes'
const initialState = {
    errMess: "Login",
    user: {}
}
export const User = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_USER:
            const newUser = action.payload
            return {
                ...state,
                user: newUser,
                errMess: "Login Successfull!"
            }
        case ActionTypes.USER_LOGIN_FAILED:
            return {
                ...state,
                errMess: action.payload
            }
        case ActionTypes.CLEAR_USER:
            return {
                ...state,
                user: {},
                errMess: "Logout Successful!"
            }
        default:
            return state
    }
}