import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllChallengersComponent } from './view-all-challengers.component';

describe('ViewAllChallengersComponent', () => {
  let component: ViewAllChallengersComponent;
  let fixture: ComponentFixture<ViewAllChallengersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllChallengersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllChallengersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
