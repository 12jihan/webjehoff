import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { ButtonComponent } from './components/button/button.component';
import { BottomBannerComponent } from './components/bottom-banner/bottom-banner.component';



@NgModule({
  declarations: [
    BannerComponent,
    ButtonComponent,
    BottomBannerComponent,
  ],
  exports: [
    BannerComponent,
    BottomBannerComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule
  ],
})

export class SharedModule { }
