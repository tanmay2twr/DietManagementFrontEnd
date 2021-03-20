import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMonthlyChartComponent } from './update-monthly-chart.component';

describe('UpdateMonthlyChartComponent', () => {
  let component: UpdateMonthlyChartComponent;
  let fixture: ComponentFixture<UpdateMonthlyChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMonthlyChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMonthlyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
