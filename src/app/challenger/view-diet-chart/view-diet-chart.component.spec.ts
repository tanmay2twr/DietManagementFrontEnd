import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDietChartComponent } from './view-diet-chart.component';

describe('ViewDietChartComponent', () => {
  let component: ViewDietChartComponent;
  let fixture: ComponentFixture<ViewDietChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDietChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDietChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
