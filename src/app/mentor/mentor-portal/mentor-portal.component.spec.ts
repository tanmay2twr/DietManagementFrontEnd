import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorPortalComponent } from './mentor-portal.component';

describe('MentorPortalComponent', () => {
  let component: MentorPortalComponent;
  let fixture: ComponentFixture<MentorPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
