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
import { GeneralHelper } from './_GeneralHelper/generalHelper';
import { DepartmentListComponent } from './department-list/department-list.component';
import { OverviewComponent } from './overview/overview.component';
import { ContactComponent } from './contact/contact.component';
import { RegblackDirective } from './customDirectives/regblack.directive';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    DepartmentListComponent,
    OverviewComponent,
    ContactComponent,
    RegblackDirective,
    ReactiveformsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService, GeneralHelper],
  bootstrap: [AppComponent]
})
export class AppModule { }
