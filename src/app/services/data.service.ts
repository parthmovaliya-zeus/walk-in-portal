import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError, map } from 'rxjs';

import {
  IApplyInJob,
  IApplyInJobBodyData,
  IJobs,
  ISuccessPage,
} from '../interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _http: HttpClient) {}

  job_rolesId: number[] = [];

  applyInJob: IApplyInJob = {
    timeSlotId: null,
    preference: [],
    resumeBase64: null,
    resumeName: null,
  };

  baseURL: string = 'https://localhost:7060/api/';

  getJobsData(): Observable<IJobs[]> {
    var allJobs = this._http
      .get<IJobs[]>(this.baseURL + 'JobListing')
      .pipe(catchError(this.handleError));

    return allJobs;
  }

  getSingleJobData(id: number): Observable<IJobs> {
    var token =
      localStorage.getItem('token') === null
        ? sessionStorage.getItem('token')
        : localStorage.getItem('token');
    return this._http.get<IJobs>(this.baseURL + 'SingleJob/' + id, {
      headers: { Authorization: `Bearer ` + token },
    });
  }

  applyInJobByUser(
    id: number,
    data: IApplyInJobBodyData
  ): Observable<ISuccessPage> {
    return this._http.post<ISuccessPage>(
      this.baseURL + 'SingleJob/applyInJob/' + id,
      data
    );
  }

  getSuccessPageData(id: number): Observable<ISuccessPage> {
    return this._http.get<ISuccessPage>(this.baseURL + 'SuccessPage/' + id);
    //   .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return throwError(errMessage);
    }
    return throwError(error || 'Node.js server error');
  }
}
