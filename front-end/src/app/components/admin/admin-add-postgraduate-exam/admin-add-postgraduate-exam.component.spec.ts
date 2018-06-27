import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddPostgraduateExamComponent } from './admin-add-postgraduate-exam.component';

describe('AdminAddPostgraduateExamComponent', () => {
  let component: AdminAddPostgraduateExamComponent;
  let fixture: ComponentFixture<AdminAddPostgraduateExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddPostgraduateExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddPostgraduateExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
