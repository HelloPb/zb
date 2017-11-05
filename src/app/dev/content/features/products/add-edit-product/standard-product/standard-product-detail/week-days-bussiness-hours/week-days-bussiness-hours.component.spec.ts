import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekDaysBussinessHoursComponent } from './week-days-bussiness-hours.component';

describe('WeekDaysBussinessHoursComponent', () => {
  let component: WeekDaysBussinessHoursComponent;
  let fixture: ComponentFixture<WeekDaysBussinessHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekDaysBussinessHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekDaysBussinessHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
