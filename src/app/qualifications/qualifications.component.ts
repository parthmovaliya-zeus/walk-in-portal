import { CommonModule } from '@angular/common';
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
import { FormsModule } from '@angular/forms';

import {
  ICollages,
  IQualifications,
  IStreams,
  ITechnologies,
  IUserEducationalQualifications,
} from '../interface';
import { UserRegistrationService } from '../services/user-registration.service';

@Component({
  selector: 'app-qualifications',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './qualifications.component.html',
  styleUrl: './qualifications.component.scss',
})
export class QualificationsComponent implements OnInit {
  isEducationalQualificationsVisible: boolean = false;
  isProfessionalQualificationsVisible: boolean = false;

  userEducationalQualifications: IUserEducationalQualifications;
  userProfessionalQualificationsVisible: any;
  userFresher: any;
  userExperienced: any;
  familiarTechnologies!: ITechnologies;
  expertiseTechnologies!: ITechnologies;
  allStreams!: IStreams;
  allQualifications!: IQualifications;
  allCollages!: ICollages;
  years: number[] = [];

  constructor(
    private renderer: Renderer2,
    private _userRegistrationService: UserRegistrationService
  ) {
    this.userEducationalQualifications =
      this._userRegistrationService.userEducationalQualifications;
    this.userProfessionalQualificationsVisible =
      this._userRegistrationService.userProfessionalQualificationsVisible;
    this.userFresher = this._userRegistrationService.userFresher;
    this.userExperienced = this._userRegistrationService.userExperienced;
    this.familiarTechnologies =
      this._userRegistrationService.familiarTechnologies;
    this.expertiseTechnologies =
      this._userRegistrationService.expertiseTechnologies;
    this.allCollages = this._userRegistrationService.allCollages;
    this.allQualifications = this._userRegistrationService.allQualifications;
    this.allStreams = this._userRegistrationService.allStreams;
    this.years = this._userRegistrationService.years;
  }

  ngOnInit(): void {}

  changeEducationalQualificationsVisible() {
    this.isEducationalQualificationsVisible =
      !this.isEducationalQualificationsVisible;
  }
  changeProfessionalQualificationsVisible() {
    this.isProfessionalQualificationsVisible =
      !this.isProfessionalQualificationsVisible;
  }

  //   @Input() set prevUserInfo(val: any) {
  //     this.userEducationalQualifications = val.userEducationalQualifications;
  //     this.userProfessionalQualificationsVisible =
  //       val.userProfessionalQualificationsVisible;
  //     this.userFresher = val.userFresher;
  //     this.userExperienced = val.userExperienced;
  //     this.familiarTechnologies = val.familiarTechnologies;
  //     this.expertiseTechnologies = val.expertiseTechnologies;
  //   }

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

  checkAggregatePercentage(ele: ElementRef): boolean {
    if (ele.nativeElement.value > 35 && ele.nativeElement.value < 99) {
      return true;
    }
    alert('Aggregate Percentage must between 35 and 99!!');
    ele.nativeElement.focus();
    return false;
  }

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
    if (
      this.checkSingleElemet(this.aggregatePercentage) &&
      this.checkAggregatePercentage(this.aggregatePercentage) &&
      this.checkSingleElemet(this.passingYear) &&
      this.checkSingleElemet(this.qualification) &&
      this.checkSingleElemet(this.stream) &&
      this.checkSingleElemet(this.collegeName) &&
      this.checkSingleElemet(this.collageLocation)
    ) {
      return true;
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
    const finalCheck: boolean = this.checkField() && this.professionalCheck();
    // const finalCheck: boolean = true;
    if (finalCheck) {
      this.qualificationsSubmited.emit({
        //   userEducationalQualifications: this.userEducationalQualifications,
        //   userProfessionalQualificationsVisible:
        //     this.userProfessionalQualificationsVisible,
        //   userFresher: this.userFresher,
        //   userExperienced: this.userExperienced,
        //   familiarTechnologies: this.familiarTechnologies,
        //   expertiseTechnologies: this.expertiseTechnologies,
        direction,
      });
    }
  }
}
