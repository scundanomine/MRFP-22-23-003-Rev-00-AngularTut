import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url ="src\assets\data\employees.json".replace("\\","\/");
  constructor(private http:HttpClient) { }
  getEmployee(){
    return this.http.get()

  }
}
