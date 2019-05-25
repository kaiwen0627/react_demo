import { createStore, applyMiddleware, compose } from "redux";
import redux_logger from "redux-logger";
import redux_thunk from "redux-thunk";
import { rootreducer } from "./rootreducer";

// export default createStore(
//   rootreducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default  createStore(rootreducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(...[redux_logger,redux_thunk])
  ));