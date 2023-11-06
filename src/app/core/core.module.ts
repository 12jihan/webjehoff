import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';


const export_import = [
  NavbarComponent,
  FooterComponent,
  BannerComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [...export_import],
  exports: [...export_import],
  providers: []
})
export class CoreModule { }
