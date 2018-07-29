import {Component, Input, OnInit} from '@angular/core';
import {TodoListService} from './todo-list.service';
import {TaskModel} from './task-model.class';

@Component({
  selector: 'task',
  template: `
    <div>
      <input type="checkbox" [(ngModel)]="task.isDone">
      {{task.desc}}
      {{task.startDate}}
      <a> - </a>
      {{task.startDate}}  
      <button (click)="bl.removeTask(task)">x</button>
    </div>
  `,
  styles: []
})
export class TaskComponent implements OnInit {

  @Input('source') task:TaskModel;

  constructor(public bl:TodoListService) { }

  ngOnInit() {
  }

}
