import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public login: string = 'Default_login';
  public password: string = 'somepass';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logIn() {
    const isLogged = this.authService.logIn(this.login, this.password);

    if (isLogged) {
      this.router.navigate(['courses']);
    }
  }
}
