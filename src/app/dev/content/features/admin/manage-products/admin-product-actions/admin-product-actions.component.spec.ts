import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductActionsComponent } from './admin-product-actions.component';

describe('AdminProductActionsComponent', () => {
  let component: AdminProductActionsComponent;
  let fixture: ComponentFixture<AdminProductActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProductActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
