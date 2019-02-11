import { Injectable } from '@angular/core';

const storageKey = 'trainingPortalUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userInfo = {
    login: '',
    token: ''
  };
  private isUserAuthenticated: boolean = false;

  constructor() {
    this.userInfo = JSON.parse(
      window.localStorage.getItem(storageKey)
    ) || {};

    if (this.userInfo.token) {
      this.isUserAuthenticated = true;
    }
  }

  logIn(login: string, password: string): boolean {
    if (login && password) {
      this.userInfo = {
        login: login,
        token: btoa(login),
      };
      this.isUserAuthenticated = true;

      window.localStorage.setItem(storageKey, JSON.stringify(this.userInfo));

      return true;
    }

    return false;
  }

  logOut() {
    return Promise.resolve(window.localStorage.removeItem(storageKey));
  }

  isAuthenticated() {
    return this.isUserAuthenticated;
  }

  getUserLogin() {
    return this.userInfo.login;
  }
}
