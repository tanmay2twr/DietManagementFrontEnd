import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDailyLogsComponent } from './update-daily-logs.component';

describe('UpdateDailyLogsComponent', () => {
  let component: UpdateDailyLogsComponent;
  let fixture: ComponentFixture<UpdateDailyLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDailyLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDailyLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
