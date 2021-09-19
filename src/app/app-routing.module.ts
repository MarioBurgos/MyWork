import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: '', component: SkeletonComponent,
    children: [
      {
        path: 'home',
        loadChildren: ()=> import('./modules/home/home.module').then(m=>m.HomeModule)
      },
      {
        path: 'work',
        loadChildren: ()=> import('./modules/work/work.module').then(m=>m.WorkModule)
      },
      {
        path: 'about',
        loadChildren: ()=> import('./modules/about/about.module').then(m=>m.AboutModule)
      },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
