import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { ContactComponent } from './contact/contact.component';
import { AboutDashboardComponent } from './about-dashboard/about-dashboard.component';
import { CvComponent } from './cv/cv.component';


@NgModule({
  declarations: [
    ContactComponent,
    AboutDashboardComponent,
    CvComponent,
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
