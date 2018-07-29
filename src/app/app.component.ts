import { Component } from '@angular/core';
import { TodoListService } from 'src/app/todo-list/todo-list.service';

@Component({
  selector: 'app-root',
  providers: [TodoListService],
  template: `
 <h1>Customers Managements</h1>
  <app-my-nav></app-my-nav>
  `
})
export class AppComponent {
  title = 'app';
}
