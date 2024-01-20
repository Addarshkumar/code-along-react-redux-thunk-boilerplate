import { legacy_createStore as createStore } from "redux";
import { reducer } from "./Reducer";
import { applyMiddleware } from "redux";
// import logger from "redux-logger";
import { thunk } from "redux-thunk";


export const Store = createStore(reducer,applyMiddleware(thunk));