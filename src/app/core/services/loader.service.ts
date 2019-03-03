import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private isLoading: Observable<boolean> = this._isLoading.asObservable();

  constructor() { }

  showLoader() {
    this._isLoading.next(true);
  }

  hideLoader() {
    this._isLoading.next(false);
  }

  isLoaderShown(): Observable<boolean> {
    return this.isLoading;
  }
}
