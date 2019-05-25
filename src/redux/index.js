import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import redux_logger from "redux-logger";
import redux_thunk from "redux-thunk";
import { rootreducer } from "./rootreducer";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootreducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default createStore(
//   persistedReducer,
//   /* preloadedState, */ composeEnhancers(
//     applyMiddleware(...[redux_logger, redux_thunk])
//   )
// );

export default () => {
  let store = createStore(
    persistedReducer,
    /* preloadedState, */ composeEnhancers(
      applyMiddleware(...[/*redux_logger,*/ redux_thunk])
    )
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
