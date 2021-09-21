import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkRoutingModule } from './work-routing.module';
import { WorkDashboardComponent } from './work-dashboard/work-dashboard.component';
import { AngularDashboardComponent } from './angular-dashboard/angular-dashboard.component';
import { OpenweatherComponent } from './openweather/openweather.component';


@NgModule({
  declarations: [
    WorkDashboardComponent,
    AngularDashboardComponent,
    OpenweatherComponent
  ],
  imports: [
    CommonModule,
    WorkRoutingModule
  ]
})
export class WorkModule { }
