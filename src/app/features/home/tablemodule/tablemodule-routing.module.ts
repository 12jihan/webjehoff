import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './githubtable/mainpage/mainpage.component';
import { DetailspageComponent } from './githubtable/detailspage/detailspage.component';

const routes: Routes = [
  { 
    path: '',
    children: [
      {
        path: '',
        component: MainpageComponent
      },
      {
        path: 'home/:repo_id',
        component: DetailspageComponent
      },

    ],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablemoduleRoutingModule { }
