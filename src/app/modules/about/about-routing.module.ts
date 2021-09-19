import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutDashboardComponent } from './about-dashboard/about-dashboard.component';

const routes: Routes = [
  {
    path: '', component: AboutDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
