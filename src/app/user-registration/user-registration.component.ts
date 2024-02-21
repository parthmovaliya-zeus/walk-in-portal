import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { PersonalInformationComponent } from '../personal-information/personal-information.component';
import { QualificationsComponent } from '../qualifications/qualifications.component';
import { ReviewProceedComponent } from '../review-proceed/review-proceed.component';
import {
  IJobRoles,
  IPersonalInformation,
  ITechnologies,
  IUserEducationalQualifications,
  IUserExperiences,
  IUserFresher,
} from '../interface';
import { UserRegistrationService } from '../services/user-registration.service';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [
    CommonModule,
    PersonalInformationComponent,
    QualificationsComponent,
    ReviewProceedComponent,
  ],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class UserRegistrationComponent implements OnInit {
  isDisable: boolean = true;
  stepCount: number = 1;

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

  constructor(private _userRegistrationService: UserRegistrationService) {
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
  }

  ngOnInit(): void {}

  setPersonalInformation(val: any) {
    this.preferredJobRoles = val.preferredJobRoles;
    this.userPersonalInformation = val.userInfo;
    window.scrollTo(0, 0);
    this.moveNextStep();
  }

  setQualificationsInformation(val: any) {
    this.userEducationalQualifications = val.userEducationalQualifications;
    this.userProfessionalQualificationsVisible =
      val.userProfessionalQualificationsVisible;
    this.userFresher = val.userFresher;
    this.userExperienced = val.userExperienced;
    window.scrollTo(0, 0);
    if (val.direction === 'PREVIOUS') {
      this.movePreviousStep();
    } else if (val.direction === 'NEXT') {
      this.moveNextStep();
    }
  }

  reviewPricessSubmited(val: any) {
    this.userPersonalInformation = val.userInfo;
    this.preferredJobRoles = val.preferredJobRoles;
    this.familiarTechnologies = val.familiarTechnologies;
    this.expertiseTechnologies = val.expertiseTechnologies;
    this.userEducationalQualifications = val.userEducationalQualifications;
    this.userProfessionalQualificationsVisible =
      val.userProfessionalQualificationsVisible;
    this.userFresher = val.userFresher;
    this.userExperienced = val.userExperienced;
    if (val.direction === 'PREVIOUS') {
      window.scrollTo(0, 0);
      this.movePreviousStep();
    }
  }
}
