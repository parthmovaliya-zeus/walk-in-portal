import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss',
})
export class UserLoginComponent {
  showPassword = false;
  passwordType = 'password';
  private _text = 'text';
  private _password = 'password';

  togglePassword() {
    this.passwordType === this._password
      ? (this.passwordType = this._text)
      : (this.passwordType = this._password);
  }
}
