import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablemoduleRoutingModule } from './tablemodule-routing.module';
import { GithubTableComponent } from './githubtable/github-table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [GithubTableComponent],
  imports: [
    CommonModule,
    TablemoduleRoutingModule,
    FontAwesomeModule
  ],
  exports: [
    GithubTableComponent
  ]
})
export class TablemoduleModule { }
