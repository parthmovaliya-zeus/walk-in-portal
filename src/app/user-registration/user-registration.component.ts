import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

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
    MatIconModule,
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
    firstName: '',
    lastName: '',
    email: '',
    countryCode: null,
    phoneNumber: null,
    portfolio: '',
    // instructionalDesigner: null,
    // softwareEngineer: null,
    // softwareQualityEngineer: null,
    referralName: '',
    jobRelatedUpdates: false,
  };
  //   userPersonalInformation: IPersonalInformation = {
  //     firstName: 'parth',
  //     lastName: 'movaliya',
  //     email: 'parth@gmail.com',
  //     countryCode: 91,
  //     phoneNumber: 1234567890,
  //     portfolio: 'parth.com',
  //     referralName: 'parth movaliya',
  //     jobRelatedUpdates: true,
  //   };

  preferredJobRoles: IJobRoles[] = [
    {
      id: 1,
      JobRoleName: 'instructional Designer',
      value: false,
    },
    {
      id: 2,
      JobRoleName: 'software Engineer',
      value: false,
    },
    {
      id: 3,
      JobRoleName: 'software Quality Engineer',
      value: false,
    },
  ];

  familiarTechnologies: ITechnologies[] = [
    {
      id: 1,
      technologyName: 'Javascript',
      value: false,
    },
    {
      id: 2,
      technologyName: 'Angular JS',
      value: false,
    },
    {
      id: 3,
      technologyName: 'React',
      value: false,
    },
    {
      id: 4,
      technologyName: 'Node JS',
      value: false,
    },
    {
      id: 5,
      technologyName: 'Others',
      value: false,
    },
  ];

  //   expertiseTechnologies: ITechnologies[] = [
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
  //   familiarTechnologies: ITechnologies[] = [
  //     {
  //       id: 1,
  //       technologyName: 'Javascript',
  //       value: true,
  //     },
  //     {
  //       id: 2,
  //       technologyName: 'Angular JS',
  //       value: true,
  //     },
  //     {
  //       id: 3,
  //       technologyName: 'React',
  //       value: false,
  //     },
  //     {
  //       id: 4,
  //       technologyName: 'Node JS',
  //       value: true,
  //     },
  //     {
  //       id: 5,
  //       technologyName: 'Others',
  //       value: true,
  //     },
  //   ];

  expertiseTechnologies: ITechnologies[] = [
    {
      id: 1,
      technologyName: 'Javascript',
      value: false,
    },
    {
      id: 2,
      technologyName: 'Angular JS',
      value: false,
    },
    {
      id: 3,
      technologyName: 'React',
      value: false,
    },
    {
      id: 4,
      technologyName: 'Node JS',
      value: false,
    },
    {
      id: 5,
      technologyName: 'Others',
      value: false,
    },
  ];
  //   expertiseTechnologies: ITechnologies[] = [
  //     {
  //       id: 1,
  //       technologyName: 'Javascript',
  //       value: true,
  //     },
  //     {
  //       id: 2,
  //       technologyName: 'Angular JS',
  //       value: false,
  //     },
  //     {
  //       id: 3,
  //       technologyName: 'React',
  //       value: true,
  //     },
  //     {
  //       id: 4,
  //       technologyName: 'Node JS',
  //       value: true,
  //     },
  //     {
  //       id: 5,
  //       technologyName: 'Others',
  //       value: false,
  //     },
  //   ];

  //   qualificationsInformation: any = {
  //     aggregatePercentage: '',
  //     passingYear: null,
  //     qualification: null,
  //     stream: null,
  //     collegeName: null,
  //     otherCollageName: null,
  //     collageLocation: '',
  //     isExperienced: false,
  //     javascript: false,
  //     angularJS: false,
  //     react: false,
  //     nodeJS: false,
  //     others: false,
  //     otherTechnologies: null,
  //     isAppearedInTestByZeus: null,
  //     appearedRoleName: null,
  //   };

  userEducationalQualifications: IUserEducationalQualifications = {
    aggregatePercentage: null,
    passingYear: null,
    qualification: null,
    stream: null,
    collegeName: null,
    otherCollageName: '',
    collageLocation: '',
  };
  //   userEducationalQualifications: IUserEducationalQualifications = {
  //     aggregatePercentage: 65,
  //     passingYear: 2020,
  //     qualification: 'ABC',
  //     stream: 'XYZ',
  //     collegeName: 'OPQ',
  //     otherCollageName: '',
  //     collageLocation: 'EFG',
  //   };

  userProfessionalQualificationsVisible: any = {
    isExperienced: false,
  };

  userFresher: IUserFresher = {
    // javascript: false,
    // angularJS: false,
    // react: false,
    // nodeJS: false,
    // others: false,
    otherTechnologies: null,
    isAppearedInTestByZeus: null,
    appearedRoleName: null,
  };
  //   userFresher: IUserFresher = {
  //     otherTechnologies: 'html, css, js',
  //     isAppearedInTestByZeus: null,
  //     appearedRoleName: null,
  //   };

  userExperienced: IUserExperiences = {
    yearsOfExperience: null,
    currentCTC: null,
    expectedCTC: null,
    // e_javascript: false,
    // e_angularJS: false,
    // e_react: false,
    // e_nodeJS: false,
    // e_others: false,
    e_otherTechnologies: null,
    // f_javascript: false,
    // f_angularJS: false,
    // f_react: false,
    // f_nodeJS: false,
    // f_others: false,
    f_otherTechnologies: null,
    isInNoticePeriod: null,
    noticePeriodEnd: null,
    noticePeriodLength: null,
    isAppearedInTestByZeus: null,
    appearedRoleName: null,
  };

  //   userExperienced: IUserExperiences = {
  //     yearsOfExperience: 2,
  //     currentCTC: 300000,
  //     expectedCTC: 400000,
  //     e_otherTechnologies: null,
  //     f_otherTechnologies: 'html, css, js',
  //     isInNoticePeriod: true,
  //     noticePeriodEnd: new Date('2020-12-10'),
  //     noticePeriodLength: 2,
  //     isAppearedInTestByZeus: false,
  //     appearedRoleName: 'no apply',
  //   };

  setPersonalInformation(val: any) {
    this.preferredJobRoles = val.preferredJobRoles;
    this.userPersonalInformation = val.userInfo;
    this.moveNextStep();
  }

  setQualificationsInformation(val: any) {
    this.userEducationalQualifications = val.userEducationalQualifications;
    this.userProfessionalQualificationsVisible =
      val.userProfessionalQualificationsVisible;
    this.userFresher = val.userFresher;
    this.userExperienced = val.userExperienced;
    if (val.direction === 'PREVIOUS') {
      this.movePreviousStep();
    } else if (val.direction === 'NEXT') {
      this.moveNextStep();
    }
  }
}
