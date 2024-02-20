import { Injectable } from '@angular/core';
import {
  IJobRoles,
  IPersonalInformation,
  ITechnologies,
  IUserEducationalQualifications,
  IUserExperiences,
  IUserFresher,
} from '../interface';

@Injectable({
  providedIn: 'root',
})
export class UserRegistrationService {
  constructor() {}

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

  familiarTechnologies: ITechnologies = {
    technologyNames: ['Javascript', 'Angular JS', 'React', 'Node JS', 'Others'],
    values: [false, false, false, false, false],
  };

  expertiseTechnologies: ITechnologies = {
    technologyNames: ['Javascript', 'Angular JS', 'React', 'Node JS', 'Others'],
    values: [false, false, false, false, false],
  };

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

  getUserPersonalInformation(): any {
    return {
      userInfo: this.userPersonalInformation,
      preferredJobRoles: this.preferredJobRoles,
    };
  }
  setUserPersonalInformation(
    userPersonalInformation: any,
    preferredJobRoles: any
  ) {
    this.userPersonalInformation = userPersonalInformation;
    this.preferredJobRoles = preferredJobRoles;
  }
}
