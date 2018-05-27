import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCurrentStatusComponent } from './admin-current-status.component';

describe('AdminCurrentStatusComponent', () => {
  let component: AdminCurrentStatusComponent;
  let fixture: ComponentFixture<AdminCurrentStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCurrentStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCurrentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
