import type {Task} from "store/types/task.types";

export type SolutionResult = {
    status: boolean,
    message: string
}

function checkSolution(task: Task, code: string): SolutionResult {
    // eslint-disable-next-line no-new-func
    const solution = new Function(code);

    try {
        const result = solution();

        switch (result) {
            case undefined:
                return {status: false, message: "The code does not return anything!"};
            case task.solution:
                return {status: true, message: "Congratulations! The task is successfully completed!"};
            default:
                return {status: false, message: "Oops! Wrong answer!"}
        }
    }
    catch(error) {
        return {status: false, message: (error as Error).message}
    }
}

export default checkSolution;