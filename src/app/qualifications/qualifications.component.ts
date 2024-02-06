import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import {
  IUserEducationalQualifications,
  IUserExperiences,
  IUserFresher,
} from '../interface';

@Component({
  selector: 'app-qualifications',
  standalone: true,
  imports: [MatIcon, FormsModule, CommonModule],
  templateUrl: './qualifications.component.html',
  styleUrl: './qualifications.component.scss',
})
export class QualificationsComponent {
  isEducationalQualificationsVisible: boolean = false;
  isProfessionalQualificationsVisible: boolean = false;

  //   userQualifications: any = {
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
    aggregatePercentage: '',
    passingYear: null,
    qualification: null,
    stream: null,
    collegeName: null,
    otherCollageName: null,
    collageLocation: '',
  };

  userProfessionalQualificationsVisible: any = {
    isExperienced: false,
  };

  userFresher: IUserFresher = {
    javascript: false,
    angularJS: false,
    react: false,
    nodeJS: false,
    others: false,
    otherTechnologies: null,
    isAppearedInTestByZeus: null,
    appearedRoleName: null,
  };

  userExperienced: IUserExperiences = {
    yearsOfExperience: null,
    currentCTC: null,
    expectedCTC: null,
    e_javascript: false,
    e_angularJS: false,
    e_react: false,
    e_nodeJS: false,
    e_others: false,
    e_otherTechnologies: null,
    f_javascript: false,
    f_angularJS: false,
    f_react: false,
    f_nodeJS: false,
    f_others: false,
    f_otherTechnologies: null,
    isInNoticePeriod: null,
    noticePeriodEnd: null,
    noticePeriodLength: null,
    isAppearedInTestByZeus: null,
    appearedRoleName: null,
  };

  changeEducationalQualificationsVisible() {
    this.isEducationalQualificationsVisible =
      !this.isEducationalQualificationsVisible;
  }
  changeProfessionalQualificationsVisible() {
    this.isProfessionalQualificationsVisible =
      !this.isProfessionalQualificationsVisible;
  }

  @Input() set prevUserInfo(val: any) {
    this.userEducationalQualifications =
      val.qualificationsInformation_userEducationalQualifications;
    this.userProfessionalQualificationsVisible =
      val.qualificationsInformation_userProfessionalQualificationsVisible;
    this.userFresher = val.qualificationsInformation_userFresher;
    this.userExperienced = val.qualificationsInformation_userExperienced;
    // this.userQualifications = val;
  }

  @Output() qualificationsSubmited = new EventEmitter();

  onSubmit(direction: string) {
    // if (!this.userProfessionalQualificationsVisible.isExperienced) {
    this.qualificationsSubmited.emit({
      userEducationalQualifications: this.userEducationalQualifications,
      userProfessionalQualificationsVisible:
        this.userProfessionalQualificationsVisible,
      userFresher: this.userFresher,
      userExperienced: this.userExperienced,
      direction,
    });
    // } else {
    //   console.log(this.userExperienced);
    // }
  }
}
