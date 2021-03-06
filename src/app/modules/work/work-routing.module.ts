import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularDashboardComponent } from './angular-dashboard/angular-dashboard.component';
import { WorkDashboardComponent } from './work-dashboard/work-dashboard.component';

const routes: Routes = [
  {path: '', component: WorkDashboardComponent},
  {path: 'angular', component: AngularDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkRoutingModule { }
