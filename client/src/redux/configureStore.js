import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Reviews } from './reviewReducer'
import { User } from './userReducer'
import { Company } from './companyReducer'
import { Products } from './productReducer'
import logger from 'redux-logger'
export const configureStore = () => {
    const store = createStore(
        combineReducers({
            products: Products,
            reviews: Reviews,
            user: User,
            company: Company
        }),
        applyMiddleware(thunk, logger)
    )
    return store
}