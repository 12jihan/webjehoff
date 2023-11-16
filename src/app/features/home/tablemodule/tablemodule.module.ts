import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablemoduleRoutingModule } from './tablemodule-routing.module';
import { GithubTableComponent } from './githubtable/github-table.component';


@NgModule({
  declarations: [GithubTableComponent],
  imports: [
    CommonModule,
    TablemoduleRoutingModule
  ],
  exports: [
    GithubTableComponent
  ]
})
export class TablemoduleModule { }
