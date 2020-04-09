import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { GeneralHelper } from '../_GeneralHelper/generalHelper';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  public employees = []
  
  constructor(private employeeService: EmployeeService, private generalHelper: GeneralHelper) { }

  ngOnInit() {
    debugger;
    this.employees = this.generalHelper.employeeList
  }

}
