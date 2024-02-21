import { Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { ListingComponent } from './listing/listing.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { JobComponent } from './job/job.component';
import { JobAppliedSuccessfulComponent } from './job-applied-successful/job-applied-successful.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ListingComponent,
  },
  {
    path: 'registration',
    pathMatch: 'full',
    component: UserRegistrationComponent,
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: UserLoginComponent,
  },
  {
    path: 'job/:id',
    pathMatch: 'full',
    component: JobComponent,
  },
  {
    path: 'job/SuccessPage/:id',
    pathMatch: 'full',
    component: JobAppliedSuccessfulComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    component: ListingComponent,
  },
];
