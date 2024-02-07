import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserLoginService {
  private _isUserLogedIn: boolean = true;
  //   private userLoginChange: Subject<boolean> = new Subject<boolean>();

  //   constructor() {
  //     this.userLoginChange.subscribe((value) => {
  //       this._isUserLogedIn = value;
  //     });
  //   }

  setUserLoginStatus(val: boolean) {
    this._isUserLogedIn = val;
  }

  getUserLoginStatus() {
    return this._isUserLogedIn;
  }

  //   observeUserLoginStatus(): Observable<boolean> {
  //     return this.userLoginChange.asObservable();
  //   }
}
