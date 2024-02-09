import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { IJobRoles, ITechnologies } from '../interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-review-proceed',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './review-proceed.component.html',
  styleUrl: './review-proceed.component.scss',
})
export class ReviewProceedComponent {
  constructor(private renderer: Renderer2) {}

  objectKeys = Object.keys;

  avatarFileInfo: any = [null];
  resumeFileInfo: any = [null];

  userInfo: any = {};
  preferredJobRoles!: IJobRoles;
  userEducationalQualifications: any = {};
  userProfessionalQualificationsVisible: any = {};
  userFresher: any = {};
  userExperienced: any = {};
  familiarTechnologies!: ITechnologies;
  expertiseTechnologies!: ITechnologies;

  isEditPersonalInformationReadOnly: boolean = true;
  isEditQualificationsReadOnly: boolean = true;

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

  @Output() reviewPricessSubmited = new EventEmitter();

  @ViewChild('editPersonalInformationContainerHash')
  editPersonalInformationContainerHash!: ElementRef;

  @ViewChild('editQualificationsContainerHash')
  editQualificationsContainerHash!: ElementRef;

  @ViewChild('firstName') firstName!: ElementRef;
  @ViewChild('lastName') lastName!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('countryCode') countryCode!: ElementRef;
  @ViewChild('phoneNumber') phoneNumber!: ElementRef;
  @ViewChild('preferredJobRolescheckbox')
  preferredJobRolescheckbox!: ElementRef;

  @ViewChild('aggregatePercentage') aggregatePercentage!: ElementRef;
  @ViewChild('passingYear') passingYear!: ElementRef;
  @ViewChild('qualification') qualification!: ElementRef;
  @ViewChild('stream') stream!: ElementRef;
  @ViewChild('collegeName') collegeName!: ElementRef;
  @ViewChild('collageLocation') collageLocation!: ElementRef;

  @ViewChild('yearsOfExperience') yearsOfExperience!: ElementRef;
  @ViewChild('currentCTC') currentCTC!: ElementRef;
  @ViewChild('expectedCTC') expectedCTC!: ElementRef;
  @ViewChild('isInNoticePeriod') isInNoticePeriod!: ElementRef;
  @ViewChild('noticePeriodEnd') noticePeriodEnd!: ElementRef;
  @ViewChild('noticePeriodLength') noticePeriodLength!: ElementRef;
  @ViewChild('exp_appearedRoleName') exp_appearedRoleName!: ElementRef;
  @ViewChild('fre_appearedRoleName') fre_appearedRoleName!: ElementRef;
  @ViewChild('exp_isAppearedInTestByZeus')
  exp_isAppearedInTestByZeus!: ElementRef;
  @ViewChild('fre_isAppearedInTestByZeus')
  fre_isAppearedInTestByZeus!: ElementRef;

  @ViewChild('expertiseTechnologiesHash')
  expertiseTechnologiesHash!: ElementRef;

  checkSingleField(ele: ElementRef): boolean {
    if (!ele.nativeElement.value) {
      alert("This field can't be empty!!");
      ele.nativeElement.focus();
      return false;
    }
    return true;
  }

  experiencedOnNoticeElemet(): boolean {
    if (this.userExperienced.isInNoticePeriod === null) {
      alert('Enter, Are you currently on notice period?');
      this.isInNoticePeriod.nativeElement.focus();
      return false;
    }
    return true;
  }

  experiencedNoticePeriodEndElemet(ele: ElementRef): boolean {
    if (this.userExperienced.isInNoticePeriod === false) {
      return true;
    }
    alert('Enter, When will your notice period end?');
    ele.nativeElement.focus();
    return false;
  }

  experiencedNoticePeriodLengthElemet(ele: ElementRef): boolean {
    if (!ele.nativeElement.value) {
      alert('Enter, How long is your notice period?');
      ele.nativeElement.focus();
      return false;
    }
    return true;
  }

  fre_checkAppearedInTestByZeusElemet(): boolean {
    if (this.userFresher.isAppearedInTestByZeus !== null) {
      return true;
    }
    alert(
      'Please Select One option of Have You Appeared For Any Test By Zeus in the past 12 months?'
    );
    this.fre_isAppearedInTestByZeus.nativeElement.focus();
    return false;
  }

  exp_checkAppearedInTestByZeusElemet(): boolean {
    if (this.userExperienced.isAppearedInTestByZeus !== null) {
      return true;
    }
    alert(
      'Please Select One option of Have You Appeared For Any Test By Zeus in the past 12 months?'
    );
    this.exp_isAppearedInTestByZeus.nativeElement.focus();
    return false;
  }

  checkExpertiseTechnologiesContainer(ele: ElementRef): boolean {
    if (this.userProfessionalQualificationsVisible.isExperienced) {
      if (this.expertiseTechnologies.values.includes(true)) {
        return true;
      }
      alert('Select atleast One Expertise Technology');
      ele.nativeElement.focus();
      return false;
    }
    return true;
  }

  checkField(): boolean {
    if (this.checkSingleField(this.aggregatePercentage)) {
      if (this.checkSingleField(this.passingYear)) {
        if (this.checkSingleField(this.qualification)) {
          if (this.checkSingleField(this.stream)) {
            if (this.checkSingleField(this.collegeName)) {
              if (this.checkSingleField(this.collageLocation)) {
                return true;
              }
            }
          }
        }
      }
    }
    return false;
  }

  whichRoleApplied() {
    if (this.userProfessionalQualificationsVisible.isExperienced) {
      if (
        this.userExperienced.isAppearedInTestByZeus &&
        !this.exp_appearedRoleName.nativeElement.value
      ) {
        alert('Enter, Which role did you apply for?');
        this.exp_appearedRoleName.nativeElement.focus();
        return false;
      }
      return true;
    } else {
      if (
        this.userFresher.isAppearedInTestByZeus &&
        !this.fre_appearedRoleName.nativeElement.value
      ) {
        alert('Enter, Which role did you apply for?');
        this.fre_appearedRoleName.nativeElement.focus();
        return false;
      }
      return true;
    }
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

  personalInfpCheckField(): boolean {
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

  fresherApplicant(): boolean {
    if (this.fre_checkAppearedInTestByZeusElemet()) {
      return this.whichRoleApplied();
    }
    return false;
  }

  ExperiencedApplicant(): boolean {
    if (this.checkSingleField(this.yearsOfExperience)) {
      if (this.checkSingleField(this.currentCTC)) {
        if (this.checkSingleField(this.expectedCTC)) {
          if (
            this.checkExpertiseTechnologiesContainer(
              this.expertiseTechnologiesHash
            )
          ) {
            if (this.experiencedOnNoticeElemet()) {
              if (
                this.experiencedNoticePeriodEndElemet(this.isInNoticePeriod)
              ) {
                if (
                  this.experiencedNoticePeriodLengthElemet(
                    this.noticePeriodLength
                  )
                ) {
                  if (this.exp_checkAppearedInTestByZeusElemet()) {
                    return this.whichRoleApplied();
                  }
                }
              }
            }
          }
        }
      }
    }
    return false;
  }

  professionalCheck(): boolean {
    if (this.userProfessionalQualificationsVisible.isExperienced) {
      return this.ExperiencedApplicant();
    } else {
      return this.fresherApplicant();
    }
  }

  onSubmit(direction: string) {
    if (this.isEditPersonalInformationReadOnly === false) {
      if (!this.checkField()) {
        return;
      }
      alert('Please save edited content');
      this.renderer.addClass(
        this.editPersonalInformationContainerHash.nativeElement,
        'highlighted'
      );
      this.editPersonalInformationContainerHash.nativeElement.focus();
      return;
    }
    if (this.isEditQualificationsReadOnly === false) {
      alert('Please save edited content');
      this.renderer.addClass(
        this.editQualificationsContainerHash.nativeElement,
        'highlighted'
      );
      this.editQualificationsContainerHash.nativeElement.focus();
      return;
    }
    this.reviewPricessSubmited.emit({
      userInfo: this.userInfo,
      preferredJobRoles: this.preferredJobRoles,
      userEducationalQualifications: this.userEducationalQualifications,
      userProfessionalQualificationsVisible:
        this.userProfessionalQualificationsVisible,
      userFresher: this.userFresher,
      userExperienced: this.userExperienced,
      familiarTechnologies: this.familiarTechnologies,
      expertiseTechnologies: this.expertiseTechnologies,
      direction,
    });
  }

  editPersonalInformationContainer() {
    this.renderer.removeClass(
      this.editPersonalInformationContainerHash.nativeElement,
      'highlighted'
    );
    if (this.isEditPersonalInformationReadOnly === false) {
      if (this.personalInfpCheckField() === true) {
        this.isEditPersonalInformationReadOnly =
          !this.isEditPersonalInformationReadOnly;
      } else {
        return;
      }
    } else {
      this.isEditPersonalInformationReadOnly =
        !this.isEditPersonalInformationReadOnly;
    }
  }

  editQualificationsContainer() {
    this.renderer.removeClass(
      this.editQualificationsContainerHash.nativeElement,
      'highlighted'
    );
    if (this.isEditQualificationsReadOnly === false) {
      // const finalCheck: boolean = this.checkField() && this.professionalCheck();
      const finalCheck: boolean = this.professionalCheck();
      if (finalCheck) {
        this.isEditQualificationsReadOnly = !this.isEditQualificationsReadOnly;
      } else {
        return;
      }
    } else {
      this.isEditQualificationsReadOnly = !this.isEditQualificationsReadOnly;
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
