import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import {FormsModule} from '@angular/forms';
import {TodoListService} from './todo-list.service';
import { TaskComponent } from './task.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TodoListComponent,
    TaskComponent
  ],
  //providers: [TodoListService],
  exports: [
    TodoListComponent
  ]
})
export class TodoListModule { }
