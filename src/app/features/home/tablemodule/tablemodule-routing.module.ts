import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubTableComponent } from './githubtable/github-table.component';

const routes: Routes = [
  { path: "", component: GithubTableComponent, outlet: 'github-table' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablemoduleRoutingModule { }
