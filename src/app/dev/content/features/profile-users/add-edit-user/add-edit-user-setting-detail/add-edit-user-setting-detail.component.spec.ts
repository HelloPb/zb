import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditUserSettingDetailComponent } from './add-edit-user-setting-detail.component';

describe('AddEditUserSettingDetailComponent', () => {
  let component: AddEditUserSettingDetailComponent;
  let fixture: ComponentFixture<AddEditUserSettingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditUserSettingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditUserSettingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
