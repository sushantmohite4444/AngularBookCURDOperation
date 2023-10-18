import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class BookDataService implements InMemoryDbService {
  createDb(){
    let books=[
      {id:101,name:"angular language",category:"angular",writer:"w3school"},
      {id:102,name:"java language",category:"java",writer:"Durga sir"},
      {id:103,name:"sql language",category:"sql",writer:"seed infotech pune"}, 
       {id:104,name:"c language",category:"c",writer:"jayanti khari"}
    ]
 return {books};   
  }
  constructor() { }
}
