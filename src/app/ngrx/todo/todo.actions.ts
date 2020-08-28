import { createAction, props } from "@ngrx/store";


const addList = createAction('[TodoState] AddList', props<{item: string}>());
const deleteList = createAction('[TodoState] DeleteList', props<{item: string}>());

const fetchList = createAction('[TodoState] FetchList');
const saveList = createAction('[TodoState] SaveList', props<{items: string[]}>());


export const TodoActions = {
  addList, deleteList, fetchList, saveList
};
