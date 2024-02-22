import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { PersonalInformationComponent } from '../personal-information/personal-information.component';
import { QualificationsComponent } from '../qualifications/qualifications.component';
import { ReviewProceedComponent } from '../review-proceed/review-proceed.component';
import {
  ICollages,
  IJobRoles,
  IPersonalInformation,
  IQualifications,
  ISingleCollage,
  ISingleJobRole,
  ISingleQualification,
  ISingleStream,
  ISingleTechnology,
  IStreams,
  ITechnologies,
  IUserEducationalQualifications,
  IUserExperiences,
  IUserFresher,
} from '../interface';
import { UserRegistrationService } from '../services/user-registration.service';
import { Router } from '@angular/router';
import { CreatePasswordComponent } from '../create-password/create-password.component';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [
    CommonModule,
    PersonalInformationComponent,
    QualificationsComponent,
    ReviewProceedComponent,
    CreatePasswordComponent,
  ],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class UserRegistrationComponent implements OnInit {
  isDisable: boolean = true;
  stepCount: number = 1;
  isGoToPassword: boolean = false;

  movePreviousStep() {
    if (this.stepCount === 3) {
      this.enableRegistration(true);
    }
    this.stepCount -= 1;
  }
  moveNextStep() {
    if (this.stepCount === 2) {
      this.enableRegistration(false);
    }
    this.stepCount += 1;
  }

  isAlreadyNextStep(stepCount: number) {
    if (this.stepCount >= stepCount) {
      return true;
    } else {
      return false;
    }
  }

  enableRegistration(value: boolean) {
    this.isDisable = value;
  }

  userPersonalInformation!: IPersonalInformation;
  preferredJobRoles!: IJobRoles;
  familiarTechnologies!: ITechnologies;
  expertiseTechnologies!: ITechnologies;
  userEducationalQualifications!: IUserEducationalQualifications;
  userProfessionalQualificationsVisible: any;
  userFresher!: IUserFresher;
  userExperienced!: IUserExperiences;
  allStreams!: IStreams;
  allQualifications!: IQualifications;
  allCollages!: ICollages;

  isReadOnly: boolean[] = [];

  startingYear: number = 1990;
  currentYear: number = new Date().getFullYear();
  years: number[] = [];

  constructor(
    private _userRegistrationService: UserRegistrationService,
    private _router: Router
  ) {
    this.userPersonalInformation =
      this._userRegistrationService.userPersonalInformation;
    this.preferredJobRoles = this._userRegistrationService.preferredJobRoles;
    this.familiarTechnologies =
      this._userRegistrationService.familiarTechnologies;
    this.expertiseTechnologies =
      this._userRegistrationService.expertiseTechnologies;
    this.userEducationalQualifications =
      this._userRegistrationService.userEducationalQualifications;
    this.userProfessionalQualificationsVisible =
      this._userRegistrationService.userProfessionalQualificationsVisible;
    this.userFresher = this._userRegistrationService.userFresher;
    this.userExperienced = this._userRegistrationService.userExperienced;
    this.allCollages = this._userRegistrationService.allCollages;
    this.allQualifications = this._userRegistrationService.allQualifications;
    this.allStreams = this._userRegistrationService.allStreams;
    this.years = this._userRegistrationService.years;
    this.isReadOnly = this._userRegistrationService.isReadOnly;
  }

  ngOnInit(): void {
    for (let i = this.currentYear; i >= this.startingYear; i--) {
      this.years.push(i);
    }

    this._userRegistrationService.getAllJobRoles().subscribe(
      (resp: ISingleJobRole[]) => {
        resp.forEach((job) => {
          this.preferredJobRoles.jobRolesIds.push(job.id);
          this.preferredJobRoles.JobRoleNames.push(job.jobName);
          this.preferredJobRoles.values.push(false);
        });
      },
      (error) => {
        console.log('Error at getting all job roles: ', error);
      }
    );

    this._userRegistrationService.getAllCollages().subscribe(
      (resp: ISingleCollage[]) => {
        resp.forEach((collage) => {
          this.allCollages.collageIds.push(collage.id);
          this.allCollages.collageNames.push(collage.collageName);
        });
      },
      (error) => {
        console.log('Error at getting all collages: ', error);
      }
    );

    this._userRegistrationService.getAllQualifications().subscribe(
      (resp: ISingleQualification[]) => {
        resp.forEach((qualification) => {
          this.allQualifications.qualificationIds.push(qualification.id);
          this.allQualifications.qualificationNames.push(
            qualification.qualificationTitle
          );
        });
      },
      (error) => {
        console.log('Error at getting all qualifications: ', error);
      }
    );

    this._userRegistrationService.getAllStreams().subscribe(
      (resp: ISingleStream[]) => {
        resp.forEach((stream) => {
          this.allStreams.streamIds.push(stream.id);
          this.allStreams.streamNames.push(stream.streamName);
        });
      },
      (error) => {
        console.log('Error at getting all streams: ', error);
      }
    );

    this._userRegistrationService.getAllTechnologies().subscribe(
      (resp: ISingleTechnology[]) => {
        resp.forEach((tech) => {
          this.familiarTechnologies.technologyIds.push(tech.id);
          this.familiarTechnologies.technologyNames.push(tech.technologyName);
          this.familiarTechnologies.values.push(false);
          this.expertiseTechnologies.technologyIds.push(tech.id);
          this.expertiseTechnologies.technologyNames.push(tech.technologyName);
          this.expertiseTechnologies.values.push(false);
        });
      },
      (error) => {
        console.log('Error at getting all technologies: ', error);
      }
    );
  }

  setPersonalInformation(val: any) {
    window.scrollTo(0, 0);
    this.moveNextStep();
  }

  setQualificationsInformation(val: any) {
    window.scrollTo(0, 0);
    if (val.direction === 'PREVIOUS') {
      this.movePreviousStep();
    } else if (val.direction === 'NEXT') {
      this.moveNextStep();
    }
  }

  reviewPricessSubmited(val: any) {
    if (val.direction === 'PREVIOUS') {
      window.scrollTo(0, 0);
      this.movePreviousStep();
    }
  }

  registerNewUser() {
    if (this.isReadOnly.indexOf(false) !== -1) {
      alert('Please save edited content');
      return;
    } else {
      this.isGoToPassword = true;
    }
  }

  clickCancle() {
    this._router.navigate(['/']);
  }
}
