import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { BookcreateComponent } from './bookcreate/bookcreate.component';
import { BookEditComponent } from './book-edit/book-edit.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'book', component:BookListComponent},
  {path:'Employees',component:EmployeeListComponent},
  {path:'Addbook',component:BookcreateComponent},
  {path:'Editbook/:id/edit',component:BookEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
