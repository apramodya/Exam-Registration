import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostgraduateRepeatExamRegistrationComponent } from './postgraduate-repeat-exam-registration.component';

describe('PostgraduateRepeatExamRegistrationComponent', () => {
  let component: PostgraduateRepeatExamRegistrationComponent;
  let fixture: ComponentFixture<PostgraduateRepeatExamRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostgraduateRepeatExamRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostgraduateRepeatExamRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
