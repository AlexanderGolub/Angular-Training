import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { LogOut } from 'src/app/actions/authentication.actions';

@Component({
  selector: 'app-auth-buttons',
  templateUrl: './auth-buttons.component.html',
  styleUrls: ['./auth-buttons.component.css']
})
export class AuthButtonsComponent implements OnInit {
  public userLogin: string;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.select((state) => {
      return state.authentication.login;
    })
      .subscribe((login) => {
        this.userLogin = login;
      });
  }

  onClick() {
    this.store.dispatch(new LogOut());
  }
}
