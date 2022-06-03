import type {TasksState} from "store/reducers/tasks.reducer";

export type LocalStorageState = {
    id: number,
    completed: boolean
}[]

export const loadTasksFromLS = (): LocalStorageState | undefined => {
    const serializedState = localStorage.getItem('tasks');

    if (serializedState === null) {
        return undefined;
    }

    return JSON.parse(serializedState);
};

export const saveTasksToLS = (state: TasksState) => {
    const mapState = state.map(item => ({id: item.id, completed: item.completed}))
    const serializedState = JSON.stringify(mapState);

    localStorage.setItem('tasks', serializedState);
};