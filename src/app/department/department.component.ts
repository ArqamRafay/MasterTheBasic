import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  departmentList = [{ "id": 1, "name": "Angular" },
  { "id": 2, "name": "MongoDB" },
  { "id": 3, "name": "SQLServer" },
  { "id": 4, "name": "MySql" },
  { "id": 5, "name": "Bootstrap" },
  { "id": 6, "name": "Python" }]
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSelect(department) {
    // example of router parameter
    this.router.navigate(['/department',department.id])

  }
}
