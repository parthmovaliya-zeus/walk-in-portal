import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { IJobRoles } from '../interface';

@Component({
  selector: 'app-personal-information',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.scss',
})
export class PersonalInformationComponent {
  userInfo: any = {};
  preferredJobRoles!: IJobRoles;

  avatarFileInfo: any = [null];
  resumeFileInfo: any = [null];

  constructor(private renderer: Renderer2) {}

  @ViewChild('firstName') firstName!: ElementRef;
  @ViewChild('lastName') lastName!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('countryCode') countryCode!: ElementRef;
  @ViewChild('phoneNumber') phoneNumber!: ElementRef;
  @ViewChild('preferredJobRolescheckbox')
  preferredJobRolescheckbox!: ElementRef;

  @Input() set prevUserInfo(val: any) {
    this.preferredJobRoles = val.preferredJobRoles;
    this.userInfo = val.userInfo;
  }

  @Output() personalInformationSubmited = new EventEmitter();

  checkSingleField(ele: ElementRef): boolean {
    if (!ele.nativeElement.value) {
      alert("This field can't be empty!!");
      ele.nativeElement.focus();
      return false;
    }
    return true;
  }

  checkPhoneNumberField(ele: ElementRef): boolean {
    if (!ele.nativeElement.value) {
      alert("This field can't be empty!!");
      ele.nativeElement.focus();
      return false;
    }
    if (ele.nativeElement.value.length !== 10) {
      alert('Phone Number Length must be 10 character long');
      ele.nativeElement.focus();
      return false;
    }
    return true;
  }

  checkJobsContainer(ele: ElementRef): boolean {
    if (this.preferredJobRoles.values.includes(true)) {
      return true;
    }
    alert('Select atleast One Preferred Job Roles');
    ele.nativeElement.focus();
    return false;
  }

  checkField(): boolean {
    if (this.checkSingleField(this.firstName)) {
      if (this.checkSingleField(this.lastName)) {
        if (this.checkSingleField(this.email)) {
          if (this.checkSingleField(this.countryCode)) {
            if (this.checkPhoneNumberField(this.phoneNumber)) {
              if (this.checkJobsContainer(this.preferredJobRolescheckbox)) {
                return true;
              }
            }
          }
        }
      }
    }
    return false;
  }

  onSubmit() {
    const finalCheck: boolean = this.checkField();

    if (finalCheck) {
      this.personalInformationSubmited.emit({
        userInfo: this.userInfo,
        preferredJobRoles: this.preferredJobRoles,
      });
    }
  }

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
