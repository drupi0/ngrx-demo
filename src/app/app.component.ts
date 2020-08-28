import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoListSelectors } from './ngrx/todo/todo.selectors';
import { TodoActions } from './ngrx/todo';
import { withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<any>){}

  todoList: Observable<string[]>;

  ngOnInit(): void{
    this.todoList = this.store.pipe(withLatestFrom(TodoListSelectors.getList));
  }

  fetchList(): void{
    this.store.dispatch(TodoActions.fetchList());
  }
}
