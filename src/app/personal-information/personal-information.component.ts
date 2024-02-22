import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { IJobRoles } from '../interface';
import { UserRegistrationService } from '../services/user-registration.service';

@Component({
  selector: 'app-personal-information',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.scss',
})
export class PersonalInformationComponent implements OnInit {
  userInfo: any = {};
  preferredJobRoles!: IJobRoles;

  avatarFileInfo: any = [null];
  resumeFileInfo: any = [null];

  //   personalInformation!: FormGroup;

  //   constructor(private renderer: Renderer2) {}
  constructor(
    private renderer: Renderer2,
    private userRegistrationService: UserRegistrationService,
    private fb: FormBuilder
  ) {
    this.userInfo = this.userRegistrationService.userPersonalInformation;
    this.preferredJobRoles = this.userRegistrationService.preferredJobRoles;
  }

  ngOnInit(): void {
    // this.personalInformation = this.fb.group({
    //   firstName: [this.userInfo.firstName, Validators.required],
    //   lastName: this.userInfo.lastName,
    //   email: '',
    //   countryCode: '',
    //   phoneNumber: '',
    //   portfolio: '',
    //   referralName: '',
    //   jobRelatedUpdates: '',
    // });
  }

  @ViewChild('firstName') firstName!: ElementRef;
  @ViewChild('lastName') lastName!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('countryCode') countryCode!: ElementRef;
  @ViewChild('phoneNumber') phoneNumber!: ElementRef;
  @ViewChild('preferredJobRolescheckbox')
  preferredJobRolescheckbox!: ElementRef;

  //   @Input() set prevUserInfo(val: any) {
  //     this.preferredJobRoles = val.preferredJobRoles;
  //     this.userInfo = val.userInfo;
  //   }

  @Output() personalInformationSubmited = new EventEmitter();

  checkSingleField(ele: ElementRef, alrt: string): boolean {
    if (!ele.nativeElement.value) {
      alert(alrt);
      ele.nativeElement.focus();
      return false;
    }
    return true;
  }

  checkPhoneNumberField(ele: ElementRef): boolean {
    if (!ele.nativeElement.value) {
      alert("This field can't be empty or Phone Number only contain Numbers");
      ele.nativeElement.focus();
      return false;
    } else if (ele.nativeElement.value.length !== 10) {
      alert('Phone Number Length must be 10 character long');
      ele.nativeElement.focus();
      return false;
    } else if (ele.nativeElement.value.indexOf(0) === 0) {
      alert('Phone Number not start with 0');
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

  checkEmail(ele: ElementRef, alrt: string): boolean {
    const emailRegex = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
    if (!ele.nativeElement.value) {
      alert(alrt);
      ele.nativeElement.focus();
      return false;
    } else if (!emailRegex.test(ele.nativeElement.value)) {
      alert('Plese enter valid Email!');
      ele.nativeElement.focus();
      return false;
    }
    return true;
  }

  checkField(): boolean {
    if (
      this.checkSingleField(this.firstName, "First Name field can't be empty!!")
    ) {
      if (
        this.checkSingleField(this.lastName, "Last Name field can't be empty!!")
      ) {
        if (this.checkEmail(this.email, "Email field can't be empty!!")) {
          if (
            this.checkSingleField(
              this.countryCode,
              "Country Code field can't be empty!!"
            )
          ) {
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
    // const finalCheck: boolean = true;

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
