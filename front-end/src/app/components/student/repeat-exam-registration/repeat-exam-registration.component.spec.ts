import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatExamRegistrationComponent } from './repeat-exam-registration.component';

describe('RepeatExamRegistrationComponent', () => {
  let component: RepeatExamRegistrationComponent;
  let fixture: ComponentFixture<RepeatExamRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepeatExamRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeatExamRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
