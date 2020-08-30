import { combineReducers, applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import posts from "./posts/reducer";
import { rootSagas } from "./rootSagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
// TODO Remover react_dev_tools_backend
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
  // other store enhancers if any
);

const rootReducer = combineReducers({
  posts,
});

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSagas);

export default store;
