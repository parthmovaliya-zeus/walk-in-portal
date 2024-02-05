import { Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { ListingComponent } from './listing/listing.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UserLoginComponent,
  },
  {
    path: 'registration',
    pathMatch: 'full',
    component: UserRegistrationComponent,
  },
  {
    path: 'jobs',
    pathMatch: 'full',
    component: ListingComponent,
  },
  {
    path: 'job/:id',
    pathMatch: 'full',
    component: ListingComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    component: UserLoginComponent,
  },
];
