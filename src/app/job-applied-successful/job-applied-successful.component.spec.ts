import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAppliedSuccessfulComponent } from './job-applied-successful.component';

describe('JobAppliedSuccessfulComponent', () => {
  let component: JobAppliedSuccessfulComponent;
  let fixture: ComponentFixture<JobAppliedSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobAppliedSuccessfulComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobAppliedSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
