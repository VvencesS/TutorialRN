import { ADD_NEW_TASK, TOGGLE_ONE_TASK } from './actionTypes';

let newTaskId = 0;
// Action: "add new task"
export const addNewTask = (inputTaskName) => {
    return {
        type: ADD_NEW_TASK,
        taskId: newTaskId++,
        taskName: inputTaskName,
    }
}

// Action: "Toggle 1 task to completed / incompleted"
export const toggleTask = (taskId) => {
    return { 
        type: TOGGLE_ONE_TASK,
        taskId,
    }
}