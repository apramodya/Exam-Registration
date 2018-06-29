import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportUndergraduateComponent } from './report-undergraduate.component';

describe('ReportUndergraduateComponent', () => {
  let component: ReportUndergraduateComponent;
  let fixture: ComponentFixture<ReportUndergraduateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportUndergraduateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportUndergraduateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
