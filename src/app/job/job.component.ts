import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterContentChecked,
} from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataService } from '../services/data.service';
import { IApplyInJob, IJobs } from '../interface';
import { JobAppliedSuccessfulComponent } from '../job-applied-successful/job-applied-successful.component';
import { UserRegistrationService } from '../services/user-registration.service';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [CommonModule, JobAppliedSuccessfulComponent, FormsModule],
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss',
  //   host: { ngSkipHydration: 'true' },
})
export class JobComponent implements OnInit, AfterContentChecked {
  job!: IJobs;
  job_rolesId: number[] = [];
  jobRolesDrop: boolean[] = [];
  isPreRequisitesApplicationClose: boolean = true;

  //   isAppliedInJob: boolean = false;

  applyInJob!: IApplyInJob;

  jobId!: number | null;

  resumeFileInfo: any = [null];

  constructor(
    private _rte: Router,
    private _route: ActivatedRoute,
    private _dataService: DataService,
    private changeDetector: ChangeDetectorRef,
    private userRegistrationService: UserRegistrationService
  ) {
    this.applyInJob = this._dataService.applyInJob;
    this.job_rolesId = this._dataService.job_rolesId;
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('redirectID')) {
      sessionStorage.removeItem('redirectID');
    }
    this.jobId = +this._route.snapshot.paramMap.get('id')!;

    this._dataService.getSingleJobData(this.jobId).subscribe(
      (resp: IJobs) => {
        this.job = resp;
        let jobIds = this.job.job_rolesId;

        jobIds.forEach((x) => this.job_rolesId.push(x));

        this.applyInJob.preference = [];

        if (this.job?.job_roles?.length) {
          for (let i = 0; i < this.job?.job_roles?.length; i++) {
            this.jobRolesDrop.push(true);
            this.applyInJob.preference.push(false);
          }
        }
      },
      (err) => {
        if (err.error.code === -1) {
          if (this.jobId !== null)
            sessionStorage.setItem('redirectID', this.jobId.toString());
          this._rte.navigate(['/login']);
        } else {
          console.log('error at get single job details: ', err);
        }
      }
    );
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  goUpClicked() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  clickClosePreRequisitesApplication() {
    this.isPreRequisitesApplicationClose =
      !this.isPreRequisitesApplicationClose;
  }

  clickClose(id: any) {
    this.jobRolesDrop[id] = !this.jobRolesDrop[id];
  }

  isApplyDisabled() {
    if (
      this.applyInJob.timeSlotId !== null &&
      this.applyInJob.preference.includes(true)
    ) {
      return false;
    }
    return true;
  }

  applyIntoJob() {
    if (this.jobId !== null) {
      //   this._dataService.applyInJobByUser(this.jobId, {
      //     timeSlotId: this.applyInJob.timeSlotId,
      //     preference: this.applyInJob.preference,
      //     job_rolesId: this.job_rolesId,
      //   });
      sessionStorage.setItem('redirectID', this.jobId.toString());
      this._rte.navigate(['job/SuccessPage', this.jobId]);
    } else {
      alert(`Job(` + this.jobId + `) Id Is null,`);
    }
  }

  showResume(event: any) {
    const file = (event?.target).files[0];
    this.resumeFileInfo = file;
    this.applyInJob.resumeName = file?.name;
    const reader = new FileReader();
    reader.onload = () => {
      this.applyInJob.resumeBase64 = reader.result as string;
    };
    reader.readAsDataURL(this.resumeFileInfo);
  }
}
