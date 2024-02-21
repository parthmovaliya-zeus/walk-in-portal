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
    id: 0,
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
    jobRolesIds: [],
    JobRoleNames: [],
    values: [],
  };

  familiarTechnologies: ITechnologies = {
    technologyIds: [],
    technologyNames: [],
    values: [],
  };

  expertiseTechnologies: ITechnologies = {
    technologyIds: [],
    technologyNames: [],
    values: [],
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
