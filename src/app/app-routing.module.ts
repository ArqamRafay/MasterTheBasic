import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterpolationComponent } from './component/interpolation/interpolation.component';
import { PropertybindingComponent } from './component/propertybinding/propertybinding.component';
import { DirectiveComponent } from './directive/directive.component';
import { ParentComponent } from './parent/parent.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentComponent } from './department/department.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentListComponent } from './department-list/department-list.component';

const routes: Routes = [
  { path: '', redirectTo:'/department', pathMatch:'full'},
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'propertyBinding', component: PropertybindingComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'employeeList', component: EmployeeListComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'department/:id', component: DepartmentListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

