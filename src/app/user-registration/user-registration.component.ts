import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PersonalInformationComponent } from '../personal-information/personal-information.component';
import { QualificationsComponent } from '../qualifications/qualifications.component';
import { ReviewProceedComponent } from '../review-proceed/review-proceed.component';
import { IPersonalInformation } from '../interface';

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
  stepCount: number = 1;

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

  userpersonalInformation: IPersonalInformation = {
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

  setPersonalInformation(val: any) {
    this.userpersonalInformation = val;
    this.moveNextStep();
  }
}
