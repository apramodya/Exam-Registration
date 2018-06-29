import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPostgraduateComponent } from './report-postgraduate.component';

describe('ReportPostgraduateComponent', () => {
  let component: ReportPostgraduateComponent;
  let fixture: ComponentFixture<ReportPostgraduateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportPostgraduateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPostgraduateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
