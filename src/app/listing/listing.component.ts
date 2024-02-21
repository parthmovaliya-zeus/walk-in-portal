import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IJobs, IPersonalInformation, IUserDetails } from '../interface';
import { DataService } from '../services/data.service';
import { UserLoginService } from '../services/user-login.service';
import { UserRegistrationService } from '../services/user-registration.service';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss',
  //   host: { ngSkipHydration: 'true' },
})
export class ListingComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private router: Router,
    private userLoginService: UserLoginService,
    private userRegistrationService: UserRegistrationService
  ) {
    this.userPersonalInformation =
      this.userRegistrationService.userPersonalInformation;
  }
  userPersonalInformation!: IPersonalInformation;
  jobs: IJobs[] = [];

  ngOnInit(): void {
    this.dataService.getJobsData().subscribe((resp: IJobs[]) => {
      this.jobs = resp;
    });
  }

  goSingleJob(id: number) {
    let token = localStorage.getItem('token');

    if (!token) {
      sessionStorage.setItem('redirectID', id.toString());
      this.router.navigate(['/login']);
    } else {
      // get user data here let token = localStorage.getItem('token');
      this.userLoginService.loginUserbyToken().subscribe(
        (resp: IUserDetails) => {
          this.userLoginService.setUserLoginStatus(true);
          this.userPersonalInformation.avatarBase64 = resp.displayPicture;
          this.userPersonalInformation.id = resp.id;
        },
        (error) => {
          console.log('Error at login with token: ', error);
        }
      );
      this.router.navigate(['/job', id]);
    }
  }
}
