import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostgraduateDashboardComponent } from './postgraduate-dashboard.component';

describe('PostgraduateDashboardComponent', () => {
  let component: PostgraduateDashboardComponent;
  let fixture: ComponentFixture<PostgraduateDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostgraduateDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostgraduateDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
