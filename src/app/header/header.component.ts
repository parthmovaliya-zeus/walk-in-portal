import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserLoginService } from '../services/user-login.service';
import { IPersonalInformation, IUserDetails } from '../interface';
import { UserRegistrationService } from '../services/user-registration.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isUserLogedIn!: boolean;

  userPersonalInformation!: IPersonalInformation;

  constructor(
    private userLoginService: UserLoginService,
    private userRegistrationService: UserRegistrationService
  ) {
    this.userPersonalInformation =
      userRegistrationService.userPersonalInformation;
  }

  ngOnInit(): void {
    this.userLoginService.getUserLoginStatus().subscribe((resp: boolean) => {
      this.isUserLogedIn = resp;
    });

    let token = localStorage.getItem('token');

    if (!token) {
      // get user data here let token = localStorage.getItem('token');
      this.userLoginService.loginUserbyToken().subscribe(
        (resp: IUserDetails) => {
          this.userLoginService.setUserLoginStatus(true);
          if (resp.displayPicture !== null)
            this.userPersonalInformation.avatarBase64 =
              'data:image/jpeg;base64, ' + resp.displayPicture;
          this.userPersonalInformation.id = resp.id;
        },
        (error) => {
          console.log('Error at login with token: ', error);
        }
      );
    }
    // this.userLoginService.getUserLoginStatus().subscribe();
  }
}
