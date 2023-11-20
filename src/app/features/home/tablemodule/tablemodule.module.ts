import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablemoduleRoutingModule } from './tablemodule-routing.module';
import { MainpageComponent } from './githubtable/mainpage/mainpage.component';
import { DetailspageComponent } from './githubtable/detailspage/detailspage.component';
import { GithubTableComponent } from './githubtable/github-table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [GithubTableComponent, MainpageComponent, DetailspageComponent],
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
