import { Injectable } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService, private store: Store<any>) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token: string;

    this.store.pipe(take(1)).subscribe(
      (state) => token = state.authentication.token
    );

    const authReq = req.clone({
      headers: req.headers.set('Authorization', token)
    });

    return next.handle(authReq);
  }
}
