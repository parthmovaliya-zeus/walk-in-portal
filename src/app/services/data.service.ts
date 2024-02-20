import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError, map } from 'rxjs';

import { IJobs } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _http: HttpClient) {}

  baseURL: string = 'https://localhost:7060/api/';

  getJobsData(): Observable<IJobs[]> {
    var allJobs = this._http
      .get<IJobs[]>(this.baseURL + 'JobListing')
      .pipe(catchError(this.handleError));

    return allJobs;
  }

  getSingleJobData(id: number): Observable<IJobs | null> {
    return this._http
      .get<IJobs>(this.baseURL + 'SingleJob/' + id)
      .pipe(catchError(this.handleError));
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
