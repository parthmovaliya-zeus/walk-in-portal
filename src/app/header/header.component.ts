import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserLoginService } from '../services/user-login.service';
import { IPersonalInformation } from '../interface';
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
    // this.userLoginService.getUserLoginStatus().subscribe();
  }
}
