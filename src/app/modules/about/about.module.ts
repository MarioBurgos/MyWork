import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { ContactComponent } from './contact/contact.component';
import { AboutDashboardComponent } from './about-dashboard/about-dashboard.component';


@NgModule({
  declarations: [
    ContactComponent,
    AboutDashboardComponent,
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
