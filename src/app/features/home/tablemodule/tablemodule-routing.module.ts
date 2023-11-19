import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubTableComponent } from './githubtable/github-table.component';

const routes: Routes = [
  { 
    path: '',
    children: [
      {
        path: '',
        component: GithubTableComponent
      },

    ],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablemoduleRoutingModule { }
