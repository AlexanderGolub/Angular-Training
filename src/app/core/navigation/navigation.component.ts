import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public isAuthenticated: boolean = false;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.select((state) => {
      return state.authentication.isUserAuthenticated;
    })
      .subscribe((value) => {
        this.isAuthenticated = value;
      });
  }
}
