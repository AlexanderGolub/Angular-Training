import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const storageKey = 'trainingPortalUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userInfo: BehaviorSubject<object> = new BehaviorSubject({
    login: '',
    token: ''
  });
  private userInfo: Observable<object> = this._userInfo.asObservable();

  private _isUserAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private isUserAuthenticated: Observable<boolean> = this._isUserAuthenticated.asObservable();

  constructor(private http: HttpClient) {
    const userInfo = JSON.parse(
      window.localStorage.getItem(storageKey)
    ) || {};

    if (userInfo.token) {
      this._userInfo.next(userInfo);
      this._isUserAuthenticated.next(true);
    }
  }

  logIn(login: string, password: string) {
    if (login && password) {

      this.http.get('login').subscribe((userInfo: any) => {
        this._userInfo.next({
          login: userInfo.login,
          token: userInfo.token
        });
        this._isUserAuthenticated.next(true);

        window.localStorage.setItem(storageKey, JSON.stringify(userInfo));
      });
    }
  }

  logOut() {
    this._userInfo.next({
      login: '',
      token: '',
    });
    this._isUserAuthenticated.next(false);

    return Promise.resolve(
      window.localStorage.removeItem(storageKey)
    );
  }

  isAuthenticatedSubscribe(): Observable<boolean> {
    return this.isUserAuthenticated;
  }

  isAuthenticated(): boolean {
    return this._isUserAuthenticated.getValue();
  }

  getUserInfo(): Observable<any> {
    return this.userInfo;
  }

  getAuthToken(): string {
    return this._userInfo.getValue()['token'];
  }
}
