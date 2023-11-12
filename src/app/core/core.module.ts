import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { GithubService } from './services/github-service/github.service';


const export_import = [
  NavbarComponent,
  FooterComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [...export_import],
  exports: [...export_import],
  providers: [GithubService]
})
export class CoreModule { }
