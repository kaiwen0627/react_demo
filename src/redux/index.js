import { createStore ,applyMiddleware,compose} from "redux";
import {rootreducer} from './rootreducer'

export default createStore(rootreducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());