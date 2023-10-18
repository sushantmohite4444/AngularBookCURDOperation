import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BookDataService } from './book-data.service';
import { BookListComponent } from './book-list/book-list.component';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { BookcreateComponent } from './bookcreate/bookcreate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookEditComponent } from './book-edit/book-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    HomeComponent,
    EmployeeListComponent,
    BookcreateComponent,
    BookEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
    , InMemoryWebApiModule.forRoot(BookDataService),
       ReactiveFormsModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
