import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { GeneralHelper } from './_GeneralHelper/generalHelper';
// import { GeneralHelper } from './_GeneralHelper/generalHelper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GeneralHelper]
})
export class AppComponent implements OnInit {
  title = 'angularmasterudemy';


  constructor(private http: HttpClient, private employeeService: EmployeeService, private generalGelper: GeneralHelper) {

    // when application run all service call and store value in helper then in whole application use this value and updates if some value add 
    this.employeeService.getEmployee()
      .subscribe(data => {
        debugger;
        generalGelper.employeeList = data
      }, error => alert(error))
  }

  ngOnInit() {

  }

}
