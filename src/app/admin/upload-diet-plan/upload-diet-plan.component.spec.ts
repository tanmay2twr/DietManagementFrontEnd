import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDietPlanComponent } from './upload-diet-plan.component';

describe('UploadDietPlanComponent', () => {
  let component: UploadDietPlanComponent;
  let fixture: ComponentFixture<UploadDietPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadDietPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDietPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
