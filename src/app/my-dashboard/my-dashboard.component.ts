import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { TodoListService } from '../todo-list/todo-list.service';
import { TaskModel } from '../todo-list/task-model.class';

@Component({
  selector: 'app-my-dashboard',
 // providers: [TodoListService],
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent {

  cards : TaskModel[];
  /** Based on the screen size, switch from standard to one column per row */
 // cards = //this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    //map(({ matches }) => {
     // if (true) {
      // return 
      // [
     /*     { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
       ];*/
     // }

    /*  return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
    /    { title: 'Card 4', cols: 1, rows: 1 }
    //  ];
    })
  );*/

  constructor(private breakpointObserver: BreakpointObserver,public bl: TodoListService ) {

    //bl.addTask("Jony" ,new Date(),new Date());
    this.cards = bl.tasks;
    
  }

  searchCustomer(name:string)
  {
    this.cards =this.bl.searchCustomer(name);
  }
}
