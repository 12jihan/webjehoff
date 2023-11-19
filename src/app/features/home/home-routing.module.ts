import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GithubTableComponent } from './tablemodule/githubtable/github-table.component';
import { TablemoduleModule } from './tablemodule/tablemodule.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./tablemodule/tablemodule.module').then((mod) => mod.TablemoduleModule)
      }
    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
