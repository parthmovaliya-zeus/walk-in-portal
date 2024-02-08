import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterContentChecked,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { IJobs } from '../interface';
import { CommonModule } from '@angular/common';
import { JobAppliedSuccessfulComponent } from '../job-applied-successful/job-applied-successful.component';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [CommonModule, JobAppliedSuccessfulComponent],
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss',
  //   host: { ngSkipHydration: 'true' },
})
export class JobComponent implements OnInit, AfterContentChecked {
  job!: IJobs | null;
  $event: any;

  isAppliedInJob: boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _dataService: DataService,
    private changeDetector: ChangeDetectorRef // private document: Document
  ) {}

  ngOnInit(): void {
    let id: number | null = +this._route.snapshot.paramMap.get('id')!;
    this._dataService.getSingleJobData(id).subscribe((resp) => {
      this.job = resp;
    });
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  goUpClicked() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  clickClose(id: any) {
    document.getElementById(id)?.classList.toggle('hide');
  }

  checkForRotate(val: any) {
    const ele = document.getElementById(val);
    if (ele?.classList.contains('hide')) {
      return false;
    }
    return true;
  }

  applyIntoJob() {
    this.isAppliedInJob = true;
  }
}
