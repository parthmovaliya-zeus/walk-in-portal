import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { IPersonalInformation } from '../interface';

@Component({
  selector: 'app-personal-information',
  standalone: true,
  imports: [MatIcon, FormsModule],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.scss',
})
export class PersonalInformationComponent {
  userInfo: IPersonalInformation = {
    firstName: '',
    lastName: '',
    email: '',
    countryCode: null,
    phoneNumber: null,
    portfolio: '',
    instructionalDesigner: false,
    softwareEngineer: false,
    softwareQualityEngineer: false,
    referralName: '',
    jobRelatedUpdates: false,
  };

  @Input() set prevUserInfo(val: any) {
    this.userInfo = val;
  }

  //   personalInformation = new FormGroup({
  //     firstName: new FormControl(''),
  //     lastName: new FormControl(''),
  //     email: new FormControl(''),
  //     countryCode: new FormControl(),
  //     phoneNumber: new FormControl(),
  //     portfolio: new FormControl(''),
  //     instructionalDesigner: new FormControl(),
  //     softwareEngineer: new FormControl(),
  //     softwareQualityEngineer: new FormControl(),
  //     referralName: new FormControl(''),
  //     jobRelatedUpdates: new FormControl(),
  //   });

  @Output() personalInformationSubmited = new EventEmitter();

  onSubmit() {
    // this.personalInformationSubmited.emit(this.personalInformation.value);
    console.log(this.userInfo);

    this.personalInformationSubmited.emit(this.userInfo);
  }
}
