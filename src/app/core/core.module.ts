import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './header/logo/logo.component';
import { AuthButtonsComponent } from './header/auth-buttons/auth-buttons.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavigationComponent, LogoComponent, AuthButtonsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent
  ]
})
export class CoreModule { }
