import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { GeneralHelper } from '../_GeneralHelper/generalHelper';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public employees = []
  public errMsg;
  constructor(private _employeeService: EmployeeService, private generalHelper: GeneralHelper) { }

  ngOnInit() {
    debugger;
    this.employees = this.generalHelper.employeeList;
  }

}
