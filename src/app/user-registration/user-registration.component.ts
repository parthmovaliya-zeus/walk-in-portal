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

  ngOnInit(): void {}

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

  userPersonalInformation: IPersonalInformation = {
    avatarBase64: null,
    avatarName: null,
    firstName: '',
    lastName: '',
    email: '',
    countryCode: null,
    phoneNumber: null,
    resumeBase64: null,
    resumeName: null,
    portfolio: '',
    referralName: '',
    jobRelatedUpdates: false,
  };

  preferredJobRoles: IJobRoles = {
    JobRoleNames: [
      'instructional Designer',
      'software Engineer',
      'software Quality Engineer',
    ],
    values: [false, false, false],
  };
  //     {
  //       JobRoleName: 'instructional Designer',
  //       value: false,
  //     },
  //     {
  //       JobRoleName: 'software Engineer',
  //       value: false,
  //     },
  //     {
  //       JobRoleName: 'software Quality Engineer',
  //       value: false,
  //     },
  //   ];

  familiarTechnologies: ITechnologies = {
    technologyNames: ['Javascript', 'Angular JS', 'React', 'Node JS', 'Others'],
    values: [false, false, false, false, false],
  };
  //   [
  //     {

  //       technologyName: 'Javascript',
  //       value: false,
  //     },
  //     {

  //       technologyName: 'Angular JS',
  //       value: false,
  //     },
  //     {

  //       technologyName: 'React',
  //       value: false,
  //     },
  //     {

  //       technologyName: 'Node JS',
  //       value: false,
  //     },
  //     {

  //       technologyName: 'Others',
  //       value: false,
  //     },
  //   ];

  expertiseTechnologies: ITechnologies = {
    technologyNames: ['Javascript', 'Angular JS', 'React', 'Node JS', 'Others'],
    values: [false, false, false, false, false],
  };
  //   [
  //     {
  //       id: 1,
  //       technologyName: 'Javascript',
  //       value: false,
  //     },
  //     {
  //       id: 2,
  //       technologyName: 'Angular JS',
  //       value: false,
  //     },
  //     {
  //       id: 3,
  //       technologyName: 'React',
  //       value: false,
  //     },
  //     {
  //       id: 4,
  //       technologyName: 'Node JS',
  //       value: false,
  //     },
  //     {
  //       id: 5,
  //       technologyName: 'Others',
  //       value: false,
  //     },
  //   ];

  userEducationalQualifications: IUserEducationalQualifications = {
    aggregatePercentage: null,
    passingYear: null,
    qualification: null,
    stream: null,
    collegeName: null,
    otherCollageName: '',
    collageLocation: '',
  };

  userProfessionalQualificationsVisible: any = {
    isExperienced: false,
  };

  userFresher: IUserFresher = {
    otherTechnologies: null,
    isAppearedInTestByZeus: null,
    appearedRoleName: null,
  };

  userExperienced: IUserExperiences = {
    yearsOfExperience: null,
    currentCTC: null,
    expectedCTC: null,
    e_otherTechnologies: null,
    f_otherTechnologies: null,
    isInNoticePeriod: null,
    noticePeriodEnd: null,
    noticePeriodLength: null,
    isAppearedInTestByZeus: null,
    appearedRoleName: null,
  };

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
