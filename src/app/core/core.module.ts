import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


const export_import = [
  NavbarComponent,
  HeaderComponent,
  FooterComponent
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
