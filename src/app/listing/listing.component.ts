import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [MatIcon, CommonModule, RouterLink],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss',
})
export class ListingComponent implements OnInit {
  public screenWidth: any;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth;
    }
  }

  jobs = [
    {
      id: 1,
      title: 'Walk In for Designer Job Role',
      sDate: '10-Jul-2021',
      eDate: '11-Jul-2021',
      location: 'Mumbai',
      job_roles: ['Instructional Designer'],
      isExpiring: true,
      isExpiringTitle: 'Expires in 5 days',
      isExtraRoles: false,
      isExtraRolesTitle: '',
    },
    {
      id: 2,
      title: 'Walk In for Multiple Job Roles',
      sDate: '03-Jul-2021',
      eDate: '04-Jul-2021',
      location: 'Mumbai',
      job_roles: [
        'Instructional Designer',
        'Software Engineer',
        'Software Quality Engineer',
      ],
      isExpiring: false,
      isExpiringTitle: '',
      isExtraRoles: true,
      isExtraRolesTitle: 'Internship Opportunity for MCA Students',
    },
    {
      id: 3,
      title: 'Walk In for Design and Development Job Role',
      sDate: '10-Jul-2021',
      eDate: '11-Jul-2021',
      location: 'Mumbai',
      job_roles: ['Instructional Designer', 'Software Engineer'],
      isExpiring: true,
      isExpiringTitle: 'Expires in 5 days',
      isExtraRoles: false,
      isExtraRolesTitle: '',
    },
  ];
}
