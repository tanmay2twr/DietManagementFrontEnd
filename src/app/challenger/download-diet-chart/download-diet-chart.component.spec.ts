import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadDietChartComponent } from './download-diet-chart.component';

describe('DownloadDietChartComponent', () => {
  let component: DownloadDietChartComponent;
  let fixture: ComponentFixture<DownloadDietChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadDietChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadDietChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
