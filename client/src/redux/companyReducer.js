import * as ActionTypes from './ActionTypes'
const initialState = {
    errMess: "",
    company: {}
}
export const Company = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMPANY:
            const newCompany = action.payload
            return {
                ...state,
                errMess: '',
                company: newCompany
            }
        case ActionTypes.COMPANY_LOGIN_FAILED:
            return {
                ...state,
                errMess: action.payload,
                company: {}
            }
        case ActionTypes.CLEAR_COMPANY:
            return {
                ...state,
                company: {}
            }
        default:
            return state
    }
}