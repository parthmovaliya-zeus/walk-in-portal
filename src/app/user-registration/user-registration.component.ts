import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PersonalInformationComponent } from '../personal-information/personal-information.component';
import { QualificationsComponent } from '../qualifications/qualifications.component';
import { ReviewProceedComponent } from '../review-proceed/review-proceed.component';
import {
  IPersonalInformation,
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
})
export class UserRegistrationComponent implements OnInit {
  isDisable: boolean = true;
  stepCount: number = 3;

  ngOnInit(): void {}

  movePreviousStep() {
    if (this.stepCount === 2) {
    }
    this.stepCount -= 1;
  }
  moveNextStep() {
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
    instructionalDesigner: null,
    softwareEngineer: null,
    softwareQualityEngineer: null,
    referralName: '',
    jobRelatedUpdates: null,
  };

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

  qualificationsInformation_userEducationalQualifications: IUserEducationalQualifications =
    {
      aggregatePercentage: '',
      passingYear: null,
      qualification: null,
      stream: null,
      collegeName: null,
      otherCollageName: null,
      collageLocation: '',
    };

  qualificationsInformation_userProfessionalQualificationsVisible: any = {
    isExperienced: true,
  };

  qualificationsInformation_userFresher: IUserFresher = {
    javascript: false,
    angularJS: false,
    react: false,
    nodeJS: false,
    others: false,
    otherTechnologies: null,
    isAppearedInTestByZeus: null,
    appearedRoleName: null,
  };

  qualificationsInformation_userExperienced: IUserExperiences = {
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

  setPersonalInformation(val: any) {
    this.userPersonalInformation = val;
    this.moveNextStep();
  }

  setQualificationsInformation(val: any) {
    this.qualificationsInformation_userEducationalQualifications =
      val.userEducationalQualifications;
    this.qualificationsInformation_userProfessionalQualificationsVisible =
      val.userProfessionalQualificationsVisible;
    this.qualificationsInformation_userFresher = val.userFresher;
    this.qualificationsInformation_userExperienced = val.userExperienced;
    if (val.direction === 'PREVIOUS') {
      this.movePreviousStep();
    } else if (val.direction === 'NEXT') {
      this.moveNextStep();
    }
  }
}
