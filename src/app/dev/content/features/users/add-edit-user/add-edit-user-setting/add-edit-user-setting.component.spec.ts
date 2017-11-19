import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditUserSettingComponent } from './add-edit-user-setting.component';

describe('AddEditUserSettingComponent', () => {
  let component: AddEditUserSettingComponent;
  let fixture: ComponentFixture<AddEditUserSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditUserSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditUserSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
