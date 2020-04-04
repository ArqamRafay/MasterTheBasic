import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterpolationComponent } from './component/interpolation/interpolation.component';
import { PropertybindingComponent } from './component/propertybinding/propertybinding.component';
import { DirectiveComponent } from './directive/directive.component';
import { ParentComponent } from './parent/parent.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'propertyBinding', component: PropertybindingComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'employeeList', component: EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
