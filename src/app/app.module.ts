import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './component/interpolation/interpolation.component';
import { PropertybindingComponent } from './component/propertybinding/propertybinding.component';
import { DirectiveComponent } from './directive/directive.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentComponent } from './department/department.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertybindingComponent,
    DirectiveComponent,
    ChildComponent,
    ParentComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    DepartmentComponent,
    PageNotFoundComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
