import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IJobs } from '../interface';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss',
})
export class ListingComponent implements OnInit {
  constructor(private dataService: DataService) {}

  jobs: IJobs[] = [];

  ngOnInit(): void {
    this.dataService.getJobsData().subscribe((resp: IJobs[]) => {
      this.jobs = resp;
    });
  }

  //   jobs = [
  //     {
  //       id: 1,
  //       title: 'Walk In for Designer Job Role',
  //       sDate: '10-Jul-2021',
  //       eDate: '11-Jul-2021',
  //       location: 'Mumbai',
  //       job_roles: ['Instructional Designer'],
  //       isExpiring: true,
  //       isExpiringTitle: 'Expires in 5 days',
  //       isExtraRoles: false,
  //       isExtraRolesTitle: '',
  //     },
  //     {
  //       id: 2,
  //       title: 'Walk In for Multiple Job Roles',
  //       sDate: '03-Jul-2021',
  //       eDate: '04-Jul-2021',
  //       location: 'Mumbai',
  //       job_roles: [
  //         'Instructional Designer',
  //         'Software Engineer',
  //         'Software Quality Engineer',
  //       ],
  //       isExpiring: false,
  //       isExpiringTitle: '',
  //       isExtraRoles: true,
  //       isExtraRolesTitle: 'Internship Opportunity for MCA Students',
  //     },
  //     {
  //       id: 3,
  //       title: 'Walk In for Design and Development Job Role',
  //       sDate: '10-Jul-2021',
  //       eDate: '11-Jul-2021',
  //       location: 'Mumbai',
  //       job_roles: ['Instructional Designer', 'Software Engineer'],
  //       isExpiring: true,
  //       isExpiringTitle: 'Expires in 5 days',
  //       isExtraRoles: false,
  //       isExtraRolesTitle: '',
  //     },
  //   ];
}
