import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService implements InMemoryDbService{

  constructor() {  }

  createDb(){
    let employees =[
      {id:1 ,name:"sushant",salary:12000},
      {id:2 ,name:'sm',salary:12000},
      {id:3 ,name:'s',salary:12000},
      {id:4 ,name:'sush',salary:12000}
    ]
    return employees;
  }
}
