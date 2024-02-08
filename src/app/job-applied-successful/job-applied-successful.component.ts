import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { IJobs } from '../interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-applied-successful',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-applied-successful.component.html',
  styleUrl: './job-applied-successful.component.scss',
})
export class JobAppliedSuccessfulComponent implements OnInit {
  job!: IJobs | null;
  constructor(
    private _route: ActivatedRoute,
    private dataService: DataService
  ) {}
  ngOnInit(): void {
    let id = +this._route.snapshot.paramMap.get('id')!;
    this.dataService.getSingleJobData(id).subscribe((resp: IJobs | null) => {
      this.job = resp;
    });
  }
}
