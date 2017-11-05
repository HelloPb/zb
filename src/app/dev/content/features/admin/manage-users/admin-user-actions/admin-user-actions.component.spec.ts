import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserActionsComponent } from './admin-user-actions.component';

describe('AdminUserActionsComponent', () => {
  let component: AdminUserActionsComponent;
  let fixture: ComponentFixture<AdminUserActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
