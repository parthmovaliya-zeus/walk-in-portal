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
  preferredJobRoles: IJobRoles[] = [];
  userEducationalQualifications: any = {};
  userProfessionalQualificationsVisible: any = {};
  userFresher: any = {};
  userExperienced: any = {};
  familiarTechnologies: ITechnologies[] = [];
  expertiseTechnologies: ITechnologies[] = [];

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

  onSubmit(direction: string) {
    if (this.isEditPersonalInformationReadOnly === false) {
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
    this.isEditPersonalInformationReadOnly =
      !this.isEditPersonalInformationReadOnly;
  }

  editQualificationsContainer() {
    this.renderer.removeClass(
      this.editQualificationsContainerHash.nativeElement,
      'highlighted'
    );
    this.isEditQualificationsReadOnly = !this.isEditQualificationsReadOnly;
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
