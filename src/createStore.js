import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "reducers";

import { routerMiddleware } from "react-router-redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function(history, initialState = undefined) {
  return createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
  );
}
