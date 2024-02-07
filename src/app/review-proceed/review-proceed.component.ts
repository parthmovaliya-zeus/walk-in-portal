import { Component, Input } from '@angular/core';
import { IJobRoles, ITechnologies } from '../interface';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-review-proceed',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './review-proceed.component.html',
  styleUrl: './review-proceed.component.scss',
})
export class ReviewProceedComponent {
  //   userPersonalInformation: IPersonalInformation = {
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     countryCode: null,
  //     phoneNumber: null,
  //     portfolio: '',
  //     // instructionalDesigner: null,
  //     // softwareEngineer: null,
  //     // softwareQualityEngineer: null,
  //     referralName: '',
  //     jobRelatedUpdates: null,
  //   };

  //   userEducationalQualifications: IUserEducationalQualifications = {
  //     aggregatePercentage: '',
  //     passingYear: null,
  //     qualification: null,
  //     stream: null,
  //     collegeName: null,
  //     otherCollageName: null,
  //     collageLocation: '',
  //   };

  //   userProfessionalQualificationsVisible: any = {
  //     isExperienced: true,
  //   };

  //   userFresher: IUserFresher = {
  //     // javascript: false,
  //     // angularJS: false,
  //     // react: false,
  //     // nodeJS: false,
  //     // others: false,
  //     otherTechnologies: null,
  //     isAppearedInTestByZeus: null,
  //     appearedRoleName: null,
  //   };

  //   userExperienced: IUserExperiences = {
  //     yearsOfExperience: null,
  //     currentCTC: null,
  //     expectedCTC: null,
  //     // e_javascript: false,
  //     // e_angularJS: false,
  //     // e_react: false,
  //     // e_nodeJS: false,
  //     // e_others: false,
  //     e_otherTechnologies: null,
  //     // f_javascript: false,
  //     // f_angularJS: false,
  //     // f_react: false,
  //     // f_nodeJS: false,
  //     // f_others: false,
  //     f_otherTechnologies: null,
  //     isInNoticePeriod: null,
  //     noticePeriodEnd: null,
  //     noticePeriodLength: null,
  //     isAppearedInTestByZeus: null,
  //     appearedRoleName: null,
  //   };

  objectKeys = Object.keys;

  userInfo: any = {};
  preferredJobRoles: IJobRoles[] = [];
  userEducationalQualifications: any = {};
  userProfessionalQualificationsVisible: any = {};
  userFresher: any = {};
  userExperienced: any = {};
  familiarTechnologies: ITechnologies[] = [];
  expertiseTechnologies: ITechnologies[] = [];

  @Input() set prevUserInfo(val: any) {
    this.userInfo = val.userInfo;
    this.preferredJobRoles = val.preferredJobRoles;
    this.userEducationalQualifications = val.userEducationalQualifications;
    this.userProfessionalQualificationsVisible =
      val.userProfessionalQualificationsVisible;
    this.userFresher = val.userFresher;
    this.userExperienced = val.userExperienced;
    this.familiarTechnologies = val.familiarTechnologies;
    this.expertiseTechnologies = val.expertiseTechnologies;
  }
}
