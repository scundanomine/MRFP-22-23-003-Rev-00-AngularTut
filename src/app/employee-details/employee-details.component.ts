import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public employee:{id:number,name:string,age:number}[]=[];
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employee= this.employeeService.getEmployee();
  }

}
