import { combineReducers } from 'redux'
import GraphReducer from './graphReducer'
import userReducer from './userReducer'


const rootReducer = combineReducers({
    GraphReducer,
    userReducer
})

export default rootReducer