import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMonthlyLogsComponent } from './view-monthly-logs.component';

describe('ViewMonthlyLogsComponent', () => {
  let component: ViewMonthlyLogsComponent;
  let fixture: ComponentFixture<ViewMonthlyLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMonthlyLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMonthlyLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
