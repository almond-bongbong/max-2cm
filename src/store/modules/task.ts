import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from 'types/task';

interface State {
  taskList: Task[];
}

const initialState: State = {
  taskList: [],
};

export default createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>): void => {
      state.taskList.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<string>): void => {
      const findTaskIndex = state.taskList.findIndex((t) => t.name === action.payload);
      state.taskList.splice(findTaskIndex, 1);
    },
  },
});
