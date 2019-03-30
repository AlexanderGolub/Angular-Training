import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { LogIn, StartApplication } from 'src/app/actions/authentication.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public login: string = 'Default_login';
  public password: string = 'somepass';

  constructor(private router: Router, private store: Store<any>) { }

  ngOnInit() {
    this.store.select((state) => {
      return state.authentication.isUserAuthenticated;
    })
      .subscribe((value) => {
        if (value) {
          this.router.navigate(['courses']);
        }
      });

    this.store.dispatch(new StartApplication());
  }

  logIn() {
    this.store.dispatch(new LogIn({
      login: this.login,
      password: this.password
    }));
  }
}
