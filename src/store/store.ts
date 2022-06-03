import {createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from "./reducers";
import {saveTasksToLS} from "core/localStorage";

export const store = createStore(reducers, composeWithDevTools());

store.subscribe(() => {
    saveTasksToLS(store.getState().tasks);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;