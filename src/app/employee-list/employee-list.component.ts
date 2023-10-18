import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees:any[]=[];
  constructor(private empservice:EmpService){
  }
  ngOnInit() {
    this.empservice.getEmployees().subscribe((data:any )=>
    {this.employees=data})
   
  }
  
  deleteemp(id:any){
    console.log(id);
    this.empservice.deleteemp(id).subscribe((result)=>{
      this.employees=this.employees.filter(iterm=>iterm.id !== id)
    })
  }

}