import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { IUserLogin } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class UserLoginService {
  private UserLogin: IUserLogin = {
    isUserLogedIn: new BehaviorSubject(false),
  };
  //   isUserLogedIn: BehaviorSubject<boolean>;

  //   constructor() {
  //     this.UserLogin.isUserLogedIn = new BehaviorSubject(false);
  //   }

  setUserLoginStatus(val: boolean) {
    this.UserLogin.isUserLogedIn.next(val);
  }

  getUserLoginStatus(): Observable<boolean> {
    return this.UserLogin.isUserLogedIn.asObservable();
  }
}
