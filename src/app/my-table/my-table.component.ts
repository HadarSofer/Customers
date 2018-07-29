import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MyTableDataSource } from './my-table-datasource';
import { TodoListService } from '../todo-list/todo-list.service';
import { TaskModel } from '../todo-list/task-model.class';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent {//implements OnInit {
 // @ViewChild(MatPaginator) paginator: MatPaginator;
  //@ViewChild(MatSort) sort: MatSort;
  //dataSource: MyTableDataSource;
  dataSource: TaskModel[];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'desc'];

 // ngOnInit() {
 //   this.dataSource = new MyTableDataSource(this.paginator, this.sort);
 // }

 constructor(public bl: TodoListService ) {

  //bl.addTask("Jony" ,new Date(),new Date());
  this.dataSource = bl.tasks;
  
}


}
