import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployee() {
    return [
      { "id": 1, "name": "Arqam", "age": 30 },
      { "id": 2, "name": "Ali", "age": 35 },
      { "id": 3, "name": "Ahmed", "age": 40 }
    ]

  }

}
