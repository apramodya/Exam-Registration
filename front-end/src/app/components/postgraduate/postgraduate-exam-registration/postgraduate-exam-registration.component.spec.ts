import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostgraduateExamRegistrationComponent } from './postgraduate-exam-registration.component';

describe('PostgraduateExamRegistrationComponent', () => {
  let component: PostgraduateExamRegistrationComponent;
  let fixture: ComponentFixture<PostgraduateExamRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostgraduateExamRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostgraduateExamRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
