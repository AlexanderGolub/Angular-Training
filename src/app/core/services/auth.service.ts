import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const storageKey = 'trainingPortalUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userInfo: BehaviorSubject<object> = new BehaviorSubject({
    login: '',
    token: ''
  });

  constructor(private http: HttpClient) {
    const userInfo = JSON.parse(
      window.localStorage.getItem(storageKey)
    ) || {};

    if (userInfo.token) {
      this._userInfo.next(userInfo);
    }
  }

  initialize() {
    const userInfo = JSON.parse(
      window.localStorage.getItem(storageKey)
    ) || {
      login: '',
      token: '',
    };

    return of(userInfo);
  }

  logIn(login: string, password: string): Observable<any> {
    if (login && password) {
      return this.http.get('login').pipe(
        map((userInfo: any) => {
          window.localStorage.setItem(storageKey, JSON.stringify(userInfo));

          return userInfo;
        })
      );
    } else {
      return of({
        login: '',
        token: '',
      });
    }
  }

  logOut() {
    return Promise.resolve(
      window.localStorage.removeItem(storageKey)
    );
  }
}
