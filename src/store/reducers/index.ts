import {combineReducers} from "redux";
import {tasksReducer} from "./tasks.reducer";
import {sectionsReducer} from "./sections.reducer";

export default combineReducers({
    tasks: tasksReducer,
    sections: sectionsReducer
});