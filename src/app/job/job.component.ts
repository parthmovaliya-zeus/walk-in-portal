import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterContentChecked,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataService } from '../services/data.service';
import { IJobs } from '../interface';
import { JobAppliedSuccessfulComponent } from '../job-applied-successful/job-applied-successful.component';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [CommonModule, JobAppliedSuccessfulComponent, FormsModule],
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss',
  //   host: { ngSkipHydration: 'true' },
})
export class JobComponent implements OnInit, AfterContentChecked {
  job!: IJobs | null;

  jobRolesDrop: boolean[] = [];
  isPreRequisitesApplicationClose: boolean = true;

  isAppliedInJob: boolean = false;

  anyValue: any;

  applyInJob: any = {
    timeSlot: '',
    preference: [],
  };

  constructor(
    private _route: ActivatedRoute,
    private _dataService: DataService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    let id: number | null = +this._route.snapshot.paramMap.get('id')!;
    this._dataService.getSingleJobData(id).subscribe((resp) => {
      this.job = resp;
    });
    if (this.job?.job_roles?.length) {
      for (let i = 0; i < this.job?.job_roles?.length; i++) {
        this.jobRolesDrop.push(true);
        this.applyInJob.preference.push(false);
      }
    }
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
      this.applyInJob.timeSlot.length > 0 &&
      this.applyInJob.preference.includes(true)
    ) {
      return false;
    }
    return true;
  }

  applyIntoJob() {
    this.isAppliedInJob = true;
  }
}
