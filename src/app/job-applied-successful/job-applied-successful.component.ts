import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import {
  IApplyInJob,
  IJobs,
  IPersonalInformation,
  ISuccessPage,
} from '../interface';
import { CommonModule } from '@angular/common';
import { UserLoginService } from '../services/user-login.service';
import { UserRegistrationService } from '../services/user-registration.service';

@Component({
  selector: 'app-job-applied-successful',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-applied-successful.component.html',
  styleUrl: './job-applied-successful.component.scss',
})
export class JobAppliedSuccessfulComponent implements OnInit {
  job!: ISuccessPage;
  job_rolesId: number[] = [];
  userPersonalInformation!: IPersonalInformation;

  applyInJob!: IApplyInJob;
  constructor(
    private _route: ActivatedRoute,
    private dataService: DataService,
    private _rte: Router,
    private userRegistrationService: UserRegistrationService
  ) {
    this.applyInJob = this.dataService.applyInJob;
    this.job_rolesId = this.dataService.job_rolesId;
    this.userPersonalInformation =
      this.userRegistrationService.userPersonalInformation;
  }

  ngOnInit(): void {
    let jobId = +this._route.snapshot.paramMap.get('id')!;

    // if (
    //   this.applyInJob.timeSlotId === null &&
    //   this.applyInJob.preference.length == 0
    // ) {
    //   this._rte.navigate(['job', jobId]);
    // }

    this.dataService
      .applyInJobByUser(jobId, {
        userId: this.userPersonalInformation.id,
        timeSlotId: this.applyInJob.timeSlotId,
        preference: this.applyInJob.preference,
        job_rolesId: this.job_rolesId,
      })
      .subscribe(
        (resp) => {},
        (error) => {
          // alert(error.message);
          // this._rte.navigate(['job', jobId]);
          console.log('Error at apply in job', error);
        }
      );

    this.dataService.getSuccessPageData(jobId).subscribe(
      (response) => {
        this.job = response;
      },
      (err) => {
        console.log('error at getting success page data: ', err);
      }
    );

    // this.dataService.getSuccessPageData(jobId).subscribe((response) => {
    //   this.job = response;
    // });
  }
}
