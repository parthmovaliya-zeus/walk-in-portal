import { CommonModule } from '@angular/common';
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

import { ITechnologies } from '../interface';

@Component({
  selector: 'app-qualifications',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './qualifications.component.html',
  styleUrl: './qualifications.component.scss',
})
export class QualificationsComponent {
  isEducationalQualificationsVisible: boolean = false;
  isProfessionalQualificationsVisible: boolean = false;

  userEducationalQualifications: any;
  userProfessionalQualificationsVisible: any;
  userFresher: any;
  userExperienced: any;
  familiarTechnologies!: ITechnologies;
  expertiseTechnologies!: ITechnologies;

  constructor(private renderer: Renderer2) {}

  changeEducationalQualificationsVisible() {
    this.isEducationalQualificationsVisible =
      !this.isEducationalQualificationsVisible;
  }
  changeProfessionalQualificationsVisible() {
    this.isProfessionalQualificationsVisible =
      !this.isProfessionalQualificationsVisible;
  }

  @Input() set prevUserInfo(val: any) {
    this.userEducationalQualifications = val.userEducationalQualifications;
    this.userProfessionalQualificationsVisible =
      val.userProfessionalQualificationsVisible;
    this.userFresher = val.userFresher;
    this.userExperienced = val.userExperienced;
    this.familiarTechnologies = val.familiarTechnologies;
    this.expertiseTechnologies = val.expertiseTechnologies;
  }

  @Output() qualificationsSubmited = new EventEmitter();

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

  @ViewChild('expertiseTechnologiesHash')
  expertiseTechnologiesHash!: ElementRef;

  checkSingleElemet(ele: ElementRef): boolean {
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
    return false;
  }
  exp_checkAppearedInTestByZeusElemet(): boolean {
    if (this.userExperienced.isAppearedInTestByZeus !== null) {
      return true;
    }
    alert(
      'Please Select One option of Have You Appeared For Any Test By Zeus in the past 12 months?'
    );
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
    if (this.checkSingleElemet(this.aggregatePercentage)) {
      if (this.checkSingleElemet(this.passingYear)) {
        if (this.checkSingleElemet(this.qualification)) {
          if (this.checkSingleElemet(this.stream)) {
            if (this.checkSingleElemet(this.collegeName)) {
              if (this.checkSingleElemet(this.collageLocation)) {
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

  fresherApplicant(): boolean {
    if (this.fre_checkAppearedInTestByZeusElemet()) {
      return this.whichRoleApplied();
    }
    return false;
  }

  ExperiencedApplicant(): boolean {
    if (this.checkSingleElemet(this.yearsOfExperience)) {
      if (this.checkSingleElemet(this.currentCTC)) {
        if (this.checkSingleElemet(this.expectedCTC)) {
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
    // const finalCheck: boolean = this.checkField() && this.professionalCheck();
    const finalCheck: boolean = true;

    if (finalCheck) {
      this.qualificationsSubmited.emit({
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
  }
}
