import { legacy_createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import rootReducer from "../reducers"

const middleWares = [thunk]

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose


const Store = legacy_createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(...middleWares))
)

export default Store