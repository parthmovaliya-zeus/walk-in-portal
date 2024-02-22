import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserLoginService } from '../services/user-login.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserRegistrationService } from '../services/user-registration.service';
import { IPersonalInformation, IUserDetails } from '../interface';

@Component({
  selector: 'app-create-password',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './create-password.component.html',
  styleUrl: './create-password.component.scss',
})
export class CreatePasswordComponent implements OnInit {
  showPassword = false;
  passwordType = 'password';
  rePasswordType = 'password';
  private _text = 'text';
  private _password = 'password';

  isUserLogedIn: any;

  userPasswords = {
    password: null,
    rePassword: null,
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
  toggleRePassword() {
    this.rePasswordType === this._password
      ? (this.rePasswordType = this._text)
      : (this.rePasswordType = this._password);
  }

  @ViewChild('password') password!: ElementRef;
  @ViewChild('repassword') repassword!: ElementRef;

  checkPassword(alrt: string): boolean {
    const passRegex = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/);
    let pass = this.password.nativeElement.value;
    let rePass = this.repassword.nativeElement.value;
    if (pass !== rePass) {
      alert(alrt);
      this.password.nativeElement.focus();
      return false;
    } else if (!passRegex.test(pass) && !passRegex.test(rePass)) {
      alert(
        'Password & Re-Password must be 8 character long with at least one capital letter and one number'
      );
      this.password.nativeElement.focus();
      return false;
    }
    return true;
  }

  registerMe() {
    const goNext = this.checkPassword('Password and Re-Password not matching');
    if (goNext) {
      this.userPersonalInformation.password = this.password.nativeElement.value;
      this.userRegistrationService.registerNewUser();
    }
  }
}
