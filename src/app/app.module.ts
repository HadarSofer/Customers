import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//import {NgCoreModule}   from "ng-core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatRadioModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule,
  MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatCardModule, MatMenuModule, MatButton
}
  from "@angular/material";
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MyTableComponent } from './my-table/my-table.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { TestButtonComponent } from './test-button/test-button.component';
import { UserComponent } from 'src/app/ev-forms/src/user.component';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';

const routes: Routes = [
   //{ path: '', redirectTo: '/', pathMatch: 'my-dashboard' },
   { path: 'my-dashboard', component: MyDashboardComponent },
   { path: 'my-table', component: MyTableComponent},
   { path: 'user', component: UserComponent }
 ];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MyTableComponent,
    MyDashboardComponent,
    TestButtonComponent,
    UserComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
