import {NgModule}       from "@angular/core";
import {CommonModule}   from "@angular/common";
import {UserComponent}  from './src/user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
//import { TddComponent } from './src/tdd.component';

@NgModule({
  declarations: [
   // UserComponent,
    //TddComponent
  ],
  exports: [
    //UserComponent,
   // TddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class EvFormsModule {
}
