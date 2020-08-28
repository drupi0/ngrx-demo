import { TodoState } from "./todo.state";
import { createReducer, on, Action } from "@ngrx/store";
import { TodoActions } from "./todo.actions";

export const initialState: TodoState = {
  list: [],
  user: ''
};

const todoReducer = createReducer(initialState,
  on(TodoActions.addList, (state, { item }) => {
    return {
      ...state,
      list: [...state.list, item]
    };
  }),
  on(TodoActions.deleteList, (state, {item}) => {
    return {
      ...state,
      list: state.list.filter(el => el !== item)
    };
  }));

  export function reducer(state: TodoState, action: Action) {
    return todoReducer(state, action);
  }
