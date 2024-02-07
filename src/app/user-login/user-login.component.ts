import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserLoginService } from '../services/user-login.service';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss',
})
export class UserLoginComponent implements OnInit {
  showPassword = false;
  passwordType = 'password';
  private _text = 'text';
  private _password = 'password';

  isUserLogedIn!: boolean;

  //   @Input() set userLoged(val: any) {
  //     this.isUserLogedIn = val;
  //   }

  constructor(
    private userLoginService: UserLoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isUserLogedIn = this.userLoginService.getUserLoginStatus();

    //   .subscribe((data:boolean)=>{this.isUserLogedIn = data})
  }

  togglePassword() {
    this.passwordType === this._password
      ? (this.passwordType = this._text)
      : (this.passwordType = this._password);
  }

  loginUserClicked() {
    this.userLoginService.setUserLoginStatus(true);
    this.router.navigate(['/jobs']);
  }
}
