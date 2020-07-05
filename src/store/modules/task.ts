import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  name: string;
  active: boolean;
}

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
  },
});
