import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-qualifications',
  standalone: true,
  imports: [MatIcon, FormsModule, CommonModule],
  templateUrl: './qualifications.component.html',
  styleUrl: './qualifications.component.scss',
})
export class QualificationsComponent {
  isEducationalQualificationsVisible: boolean = false;
  isProfessionalQualificationsVisible: boolean = false;

  userEducationalQualifications: any = {
    aggregatePercentage: null,
    passingYear: null,
    qualification: null,
    stream: null,
    collegeName: null,
    otherCollageName: null,
    collageLocation: null,
  };

  userProfessionalQualificationsVisible: any = {
    isFresher: null,
  };

  changeEducationalQualificationsVisible() {
    this.isEducationalQualificationsVisible =
      !this.isEducationalQualificationsVisible;
  }
  changeProfessionalQualificationsVisible() {
    this.isProfessionalQualificationsVisible =
      !this.isProfessionalQualificationsVisible;
  }
}
