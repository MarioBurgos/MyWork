import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkRoutingModule } from './work-routing.module';
import { WorkDashboardComponent } from './work-dashboard/work-dashboard.component';


@NgModule({
  declarations: [
    WorkDashboardComponent
  ],
  imports: [
    CommonModule,
    WorkRoutingModule
  ]
})
export class WorkModule { }
