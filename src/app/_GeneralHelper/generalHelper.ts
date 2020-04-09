import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../employee.service';


@Injectable()
export class GeneralHelper {
    title = 'angularmasterudemy';
    public employeeList: any

    constructor(private http: HttpClient, private employeeService: EmployeeService) {
       
    }


}
