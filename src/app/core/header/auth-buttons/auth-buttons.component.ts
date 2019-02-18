import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-buttons',
  templateUrl: './auth-buttons.component.html',
  styleUrls: ['./auth-buttons.component.css']
})
export class AuthButtonsComponent implements OnInit {
  public userLogin: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getUserInfo()
      .subscribe((userInfo) => {
        this.userLogin = userInfo.login;
      });
  }

  onClick() {
    this.authService.logOut().then(() => {
      this.router.navigate(['login']);
    });
  }
}
