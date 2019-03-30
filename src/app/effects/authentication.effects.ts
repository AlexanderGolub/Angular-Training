import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs/operators';

import { AuthService } from '../core/services/auth.service';
import { ActionTypes, SaveUserInfo, Initialize } from '../actions/authentication.actions';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable()
export class AuthenticationEffects {

  @Effect()
  startApp$ = this.actions$
    .pipe(
      ofType(ActionTypes.StartApplication),
      mergeMap(() => this.authService.initialize()
        .pipe(
          map((userInfo) => new Initialize(userInfo)),
        )
      )
    );

  @Effect()
  logIn$ = this.actions$
    .pipe(
      ofType(ActionTypes.LogIn),
      mergeMap((action: any) => this.authService.logIn(action.payload.login, action.payload.password)
        .pipe(
          map((userInfo) => new SaveUserInfo(userInfo)),
        )
      )
    );

  @Effect({ dispatch: false })
  logOut$ = this.actions$
    .pipe(
      ofType(ActionTypes.LogOut),
      switchMap(() => {
        this.authService.logOut()
          .then(() => this.router.navigate(['login']));

          return of({});
      })
    );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) { }
}