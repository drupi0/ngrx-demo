import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { STATENAME } from './todo.selectors';
import * as TodoReducer from "./todo.reducer";
import { EffectsModule } from "@ngrx/effects";
import { TodoEffects } from "./todo.effects";
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(STATENAME, TodoReducer.reducer),
    EffectsModule.forFeature([TodoEffects])
  ]
})
export class TodoStateModule {}
