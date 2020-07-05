import { combineReducers } from '@reduxjs/toolkit';
import task from './task';

const rootReducer = combineReducers({
  task: task.reducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
