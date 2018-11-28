import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './header/logo/logo.component';
import { AuthButtonsComponent } from './header/auth-buttons/auth-buttons.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LogoComponent, AuthButtonsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
