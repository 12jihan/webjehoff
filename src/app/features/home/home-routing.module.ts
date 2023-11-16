import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GithubTableComponent } from './tablemodule/githubtable/github-table.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '123',
        component: GithubTableComponent,
        // loadChildren: () => import('./tablemodule/tablemodule.module').then(m => m.TablemoduleModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
