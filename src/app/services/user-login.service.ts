import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  catchError,
  of,
  throwError,
} from 'rxjs';
import { IUserDetails, IUserLogin } from '../interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserLoginService {
  private UserLogin: IUserLogin = {
    isUserLogedIn: new BehaviorSubject(false),
  };

  constructor(private _http: HttpClient) {}
  baseURL = 'https://localhost:7060/api/';
  //   isUserLogedIn: BehaviorSubject<boolean>;

  //   constructor() {
  //     this.UserLogin.isUserLogedIn = new BehaviorSubject(false);
  //   }

  loginUser(loginDetails: any) {
    return this._http.post<any>(this.baseURL + 'Users/login', {
      email: loginDetails.email,
      password: loginDetails.password,
    });
    //   .pipe(catchError(this.handleError));

    // answer.subscribe(
    //   (data) => console.log('success', data),
    //   (error) => console.log('error')
    // );
  }

  loginUserbyToken(): Observable<IUserDetails> {
    const token = localStorage.getItem('token');
    // var headerObject = new HttpHeaders().set(
    //   'Authorization',
    //   'Bearer ' + token
    // );
    return this._http.get<IUserDetails>(this.baseURL + 'Users/email', {
      headers: { Authorization: `Bearer ` + token },
    });
  }

  setUserLoginStatus(val: boolean) {
    this.UserLogin.isUserLogedIn.next(val);
  }

  getUserLoginStatus(): Observable<boolean> {
    return this.UserLogin.isUserLogedIn.asObservable();
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return throwError(errMessage);
    }
    return throwError(error || 'Node.js server error');
  }
}
