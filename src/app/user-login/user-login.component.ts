import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserLoginService } from '../services/user-login.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserRegistrationService } from '../services/user-registration.service';
import { IPersonalInformation } from '../interface';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss',
  //   host: { ngSkipHydration: 'true' },
})
export class UserLoginComponent implements OnInit {
  showPassword = false;
  passwordType = 'password';
  private _text = 'text';
  private _password = 'password';

  remember_me: boolean = false;

  isUserLogedIn: any;

  userLoginDetails = {
    email: null,
    password: null,
  };

  userPersonalInformation!: IPersonalInformation;

  constructor(
    private userLoginService: UserLoginService,
    private router: Router,
    private userRegistrationService: UserRegistrationService
  ) {
    this.userPersonalInformation =
      userRegistrationService.userPersonalInformation;
  }

  ngOnInit(): void {
    this.isUserLogedIn = this.userLoginService.getUserLoginStatus();
    //   .subscribe((data:boolean)=>{this.isUserLogedIn = data})
  }

  togglePassword() {
    this.passwordType === this._password
      ? (this.passwordType = this._text)
      : (this.passwordType = this._password);
  }

  @ViewChild('email') email!: ElementRef;
  @ViewChild('password') password!: ElementRef;

  checkSingleField(ele: ElementRef, alrt: string): boolean {
    if (!ele.nativeElement.value) {
      alert(alrt);
      ele.nativeElement.focus();
      return false;
    }
    return true;
  }

  checkEmail(ele: ElementRef, alrt: string): boolean {
    const emailRegex = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
    if (!ele.nativeElement.value) {
      alert(alrt);
      ele.nativeElement.focus();
      return false;
    } else if (!emailRegex.test(ele.nativeElement.value)) {
      alert('Plese enter valid Email!');
      ele.nativeElement.focus();
      return false;
    }
    return true;
  }

  toggleRememberMe() {
    this.remember_me = !this.remember_me;
  }

  loginUserClicked() {
    console.log(this.remember_me);

    if (this.checkEmail(this.email, 'Plese enter  Email!'))
      if (this.checkSingleField(this.password, 'Please Enter password!!'))
        this.userLoginService.loginUser(this.userLoginDetails).subscribe(
          (resp) => {
            var userData = resp.returnUserData;
            if (this.remember_me) {
              var token = resp.token;
              localStorage.setItem('token', token);
            }
            this.userPersonalInformation.avatarBase64 = userData.DisplayPicture;
            this.userPersonalInformation.id = userData.id;
            this.userLoginService.setUserLoginStatus(true);
            let redirectID = sessionStorage.getItem('redirectID');
            if (redirectID) {
              this.router.navigate(['/job', redirectID]);
            } else {
              this.router.navigate(['']);
            }
          },
          (error) => {
            alert("Email or Password dosen't match!!");
            this.email.nativeElement.focus();
          }
        );
  }

  createAccountClicked() {
    this.userLoginService.setUserLoginStatus(false);
    this.router.navigate(['/registration']);
  }
}
