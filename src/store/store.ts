import {createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from "./reducers";

export const store = createStore(reducers, composeWithDevTools());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;