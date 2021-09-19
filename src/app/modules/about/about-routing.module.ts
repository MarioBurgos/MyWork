import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutDashboardComponent } from './about-dashboard/about-dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { CvComponent } from './cv/cv.component';

const routes: Routes = [
  {
    path: '', component: AboutDashboardComponent
  },
  {
    path: 'contact', component: ContactComponent, pathMatch: 'full'
  },
  {
    path: 'cv', component: CvComponent, pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
