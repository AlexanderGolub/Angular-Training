import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  private isAuthenticated: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated();
  }
}
