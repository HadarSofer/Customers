import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {map} from "rxjs/operators";
import { TodoListService } from '../../todo-list/todo-list.service';


@Component({
  selector: 'app-user',
  template: `
    <div>
      <h3>Add new customer</h3>
      <div>
      <div [formGroup]="myForm">
        name : <input matInput  type="text"   formControlName="name"><br><br>
        email: <input matInput type="email"  formControlName="email"><br><br>
        age  : <input matInput type="number" [formControl]="ageFc"><br><br>
        gender:
       <input type="radio" formControlName="gender" value="male" checked> Male
        <input type="radio" formControlName="gender" value="female"> Female<br>


        <!--
        <mat-radio-group>
        <mat-radio-button name ="gender" formControlName="gender" value="male" checked>Male</mat-radio-button>
        <mat-radio-button name ="gender" formControlName="gender" value="female">Female</mat-radio-button>
      </mat-radio-group>-->
      <br>
      </div>
      <hr>
      <button mat-raised-button (click)="addCustomer()">Add</button>

       <!--
      <pre>
        {{myForm.value | json }}
      </pre>-->
      </div> 
    </div> 
  `,
  styles: [`
    .ng-invalid {
      border-right: 3px solid red;
    }
    .ng-valid {
      border-right: 3px solid green;
    }
  `]
})
export class UserComponent {

  myForm = new FormGroup({
    name   : new FormControl('',[
      Validators.required,
      Validators.maxLength(10)
    ]),
    email  : new FormControl(''),
    age    : new FormControl(),
    gender : new FormControl(),
 
  });

  constructor(public bl: TodoListService){
    this.myForm.valueChanges
     /* .pipe(
       map(val=> val.name)
      )
      .subscribe(value=>{
        console.dir(value);
      });
      this.myForm.disable();*/

      //this.update();
    /*this.myForm.controls.name.valueChanges.subscribe(value=>{
      console.dir(value);
    })*/


  }
  addCustomer(){
    let user = this.myForm.value;
    this.bl.addCustomer(user)
  }

  get ageFc(){
    return this.myForm.get('age');
  }
  send(){
    let user = this.myForm.value;
    console.log(user);
  }

  update(){
    setInterval(()=>{
      this.myForm.patchValue({
        name: '!',
        xxxx: 132
      })
    },2000);
  }

}
