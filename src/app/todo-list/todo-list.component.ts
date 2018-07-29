import { Component, OnInit } from '@angular/core';
import {TaskModel} from './task-model.class';
import {TodoListService} from './todo-list.service';
import { NgModule }  from '@angular/core';

@Component({
  selector: 'todo-list',
  providers: [TodoListService],
  template: `
    <div>
    <a>Task:</a>
      <input type="text" #i>
      <a>Satrt Date:</a>
      <input type="date" #sd>
      <a>End Date:</a>
      <input type="date" #ed>
     <button  (click)= "bl.addTask(i.value,sd.value,ed.value)">Add Task</button>
      
      <hr>      
        <task
          [source]="task"
          *ngFor="let task of bl.tasks"></task>
      
      <div>
      
      </div>
      <!--<div *ngFor="let task of bl.tasks">
        <input type="checkbox" [(ngModel)]="task.isDone">

        &lt;!&ndash;<input type="checkbox" 
               (ngModelChecked) = "task.isDone = $event"
               [ngModel]="task.isDone">&ndash;&gt;
        
        
        &lt;!&ndash;<input type="checkbox" (change)="setIsDone($event,task)">&ndash;&gt;
        {{task.desc}}
        <button (click)="bl.removeTask(task)">x</button>
      </div>-->
      <hr>
      <b>Total {{bl.totalIsDone}} / {{bl.tasks.length}}</b>

     <hr>
    <div *ngIf="bl.expiredTasks().length > 0">
     <b>Expired : </b>
     <ul>
     <li *ngFor="let task of bl.expiredTasks()">
       {{task.desc}}
    </li>
    </ul>
   </div>
    

    </div>
  `,
  styles: []
})
export class TodoListComponent {
 //bl:TodoListService = new TodoListService();
  constructor(public bl: TodoListService){}
}
