import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.scss',
})
export class UserRegistrationComponent implements OnInit {
  isDisable: boolean = true;
  stepCount: number = 1;

  ngOnInit(): void {}

  movePreviousStep() {
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
}
