import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  URL:string="http://localhost:8081/api/";
  constructor(private alldata:HttpClient) { 
    console.log(alldata);
  }
  getEmployees(){
    return this.alldata.get(this.URL + 'employees')
}
deleteemp(Id:any){
  return this.alldata.delete(`${this.URL + 'employees'}/${Id}`)
}

  
  

  
}
