import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url: string = "/assets/data/employees.json";

  constructor(private http: HttpClient) { }

// design one more service get against ID 

  getEmployee(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url).catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error")
  }

}
