import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-buttons',
  templateUrl: './auth-buttons.component.html',
  styleUrls: ['./auth-buttons.component.css']
})
export class AuthButtonsComponent implements OnInit {
  private userLogin: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userLogin = this.authService.getUserLogin();
  }

  onClick() {
    this.authService.logOut();
  }
}
