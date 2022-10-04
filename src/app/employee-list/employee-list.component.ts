import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees:{id:number,name:string,age:number}[]=[];
  constructor(private employeeService:EmployeeService) { 

  }

  ngOnInit(): void {
    this.employeeService.getEmployee()
      .subscribe((data)=>{
        this.employees=data;
      })
  }

}
