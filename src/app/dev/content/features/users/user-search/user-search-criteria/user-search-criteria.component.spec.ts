import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchCriteriaComponent } from './user-search-criteria.component';

describe('UserSearchCriteriaComponent', () => {
  let component: UserSearchCriteriaComponent;
  let fixture: ComponentFixture<UserSearchCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSearchCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
