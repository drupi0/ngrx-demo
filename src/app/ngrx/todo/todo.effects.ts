import { Injectable } from "@angular/core";
import { Effect, Actions, ofType, createEffect } from "@ngrx/effects";
import { of } from "rxjs";
import { TodoState } from "./todo.state";
import { Store } from "@ngrx/store";
import { TodoActions } from "./todo.actions";
import { withLatestFrom, switchMap, concatMap, map, switchMapTo } from "rxjs/operators";
import { TodoListSelectors } from "./todo.selectors";
import { Action } from "rxjs/internal/scheduler/Action";

const SAMPLEAPI = of(['item1', 'item2', 'item3', 'item3']);

@Injectable()
export class TodoEffects {

  constructor(private store: Store<TodoState>, private actions: Actions){}

  fetchEffect = createEffect(() => this.actions.pipe(
    ofType(TodoActions.fetchList),
    switchMap(() => SAMPLEAPI),
    concatMap(list => list.map(item => TodoActions.addList({item})))
  ));

}
