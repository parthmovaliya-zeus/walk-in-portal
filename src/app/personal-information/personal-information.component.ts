import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { IJobRoles, IPersonalInformation } from '../interface';

@Component({
  selector: 'app-personal-information',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.scss',
})
export class PersonalInformationComponent {
  //   userInfo: IPersonalInformation = {
  // firstName: '',
  // lastName: '',
  // email: '',
  // countryCode: null,
  // phoneNumber: null,
  // portfolio: '',
  // referralName: '',
  // jobRelatedUpdates: false,
  //   };

  userInfo: any = {};
  preferredJobRoles: IJobRoles[] = [];

  @Input() set prevUserInfo(val: any) {
    this.preferredJobRoles = val.preferredJobRoles;
    this.userInfo = val.userInfo;
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
    this.personalInformationSubmited.emit({
      userInfo: this.userInfo,
      preferredJobRoles: this.preferredJobRoles,
    });
  }

  avatarFileInfo: any = [null];
  resumeFileInfo: any = [null];

  showPreview(event: any) {
    const file = (event?.target).files[0];
    this.userInfo.avatarName = file?.name;
    this.avatarFileInfo = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.userInfo.avatarBase64 = reader.result as string;
    };
    reader.readAsDataURL(this.avatarFileInfo);
  }

  showResume(event: any) {
    const file = (event?.target).files[0];
    this.resumeFileInfo = file;
    this.userInfo.resumeName = file?.name;
    const reader = new FileReader();
    reader.onload = () => {
      this.userInfo.resumeBase64 = reader.result as string;
    };
    reader.readAsDataURL(this.resumeFileInfo);
  }
}
