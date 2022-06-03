import type {TasksState} from "store/reducers/tasks.reducer";
import type {LocalStorageState} from "./localStorage";

export const combineStates = (initialState: TasksState, localStorageState: LocalStorageState | undefined): TasksState => {
    return initialState.map(initialItem => {
        const localStorageItem = localStorageState?.find(locStorItem => locStorItem.id === initialItem.id);

        if (!localStorageItem)
            return initialItem;

        initialItem.completed = localStorageItem.completed;

        return initialItem;
    })
}