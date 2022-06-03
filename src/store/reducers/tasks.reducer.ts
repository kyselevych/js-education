import tasks from 'tasks.json';
import type {Task} from '../types/task.types';
import {AnyAction} from "redux";
import {loadTasksFromLS} from "core/localStorage";
import {combineStates} from "core/combineStates";

export type TasksState = Task[];

const initialState = combineStates(tasks, loadTasksFromLS()) as TasksState;

export const tasksReducer = (state: TasksState = initialState, action: AnyAction) => {
    switch (action.type) {
        case "COMPLETE_TASK": {
            const tasks = state.map(task => {
                if (task.id === action.payload)
                    return {...task, completed: true};
                else
                    return task;
            }) as TasksState;
            return tasks;
        }
        default:
            return state;
    }
}

