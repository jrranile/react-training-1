import { combineReducers } from 'redux'
import GraphReducer from './graphReducer'
import postsReducer from './postsReducer'
import userReducer from './userReducer'


const rootReducer = combineReducers({
    GraphReducer,
    userReducer,
    postsReducer
})

export default rootReducer