import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { GithubService } from './services/github-service/github.service';
import { HttpClientModule } from '@angular/common/http';
import { BottomBannerComponent } from './components/bottom-banner/bottom-banner.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BloggingService } from './services/blogging-service/blogging.service';
;


const export_declarations = [
  NavbarComponent,
  FooterComponent,
  BottomBannerComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  declarations: [...export_declarations],
  exports: [...export_declarations],
  providers: [GithubService, BloggingService]
})
export class CoreModule { }
