import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { GithubTableComponent } from './components/githubtable/github-table.component';



@NgModule({
  declarations: [
    BannerComponent,
    GithubTableComponent
  ],
  exports: [
    BannerComponent,
    GithubTableComponent
  ],
  imports: [
    CommonModule
  ],
})
export class SharedModule { }
