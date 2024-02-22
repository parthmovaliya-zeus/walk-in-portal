import { Injectable } from '@angular/core';
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
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserRegistrationService {
  constructor(private _http: HttpClient) {}
  baseURL: string = 'https://localhost:7060/api/';

  isReadOnly: boolean[] = [];
  isEditPersonalInformationReadOnly!: boolean;
  isEditQualificationsReadOnly!: boolean;

  userPersonalInformation: IPersonalInformation = {
    id: 0,
    avatarBase64: null,
    avatarName: null,
    firstName: '',
    lastName: '',
    email: '',
    password: null,
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

  allStreams: IStreams = {
    streamIds: [],
    streamNames: [],
  };

  allQualifications: IQualifications = {
    qualificationIds: [],
    qualificationNames: [],
  };

  allCollages: ICollages = {
    collageIds: [],
    collageNames: [],
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
    qualificationId: null,
    streamId: null,
    collegeId: null,
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

  years: number[] = [];

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

  getAllJobRoles(): Observable<ISingleJobRole[]> {
    return this._http.get<ISingleJobRole[]>(this.baseURL + 'EnumJobRoles');
  }

  getAllTechnologies(): Observable<ISingleTechnology[]> {
    return this._http.get<ISingleTechnology[]>(
      this.baseURL + 'EnumTechnologies'
    );
  }

  getAllCollages(): Observable<ISingleCollage[]> {
    return this._http.get<ISingleCollage[]>(this.baseURL + 'EnumCollages');
  }

  getAllQualifications(): Observable<ISingleQualification[]> {
    return this._http.get<ISingleQualification[]>(
      this.baseURL + 'EnumQualifications'
    );
  }

  getAllStreams(): Observable<ISingleStream[]> {
    return this._http.get<ISingleStream[]>(this.baseURL + 'EnumStreams');
  }

  registerNewUser() {
    console.log('registerNewUser: ', {
      userPersonalInformation: this.userPersonalInformation,
      preferredJobRoles: this.preferredJobRoles,
      familiarTechnologies: this.familiarTechnologies,
      expertiseTechnologies: this.expertiseTechnologies,
      userEducationalQualifications: this.userEducationalQualifications,
      userProfessionalQualificationsVisible:
        this.userProfessionalQualificationsVisible,
      userFresher: this.userFresher,
      userExperienced: this.userExperienced,
    });
  }
}
