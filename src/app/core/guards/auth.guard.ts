import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private store: Store<any>) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    let isAuthenticated: boolean;

    this.store.pipe(take(1)).subscribe(
      (state) => isAuthenticated = state.authentication.isUserAuthenticated
    );

    if (!isAuthenticated) {
      this.router.navigate(['login']);
    }

    return isAuthenticated;
  }
}
