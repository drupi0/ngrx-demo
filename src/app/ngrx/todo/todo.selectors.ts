import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from './todo.state';

export const STATENAME = 'TodoState';

const getTodoState = createFeatureSelector<TodoState>(STATENAME);

const getList = createSelector(getTodoState, state => state.list);
const getUser = createSelector(getTodoState, state => state.user);


export const TodoListSelectors = {
  getList,
  getUser
};
