import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStoreSearchCriteriaComponent } from './my-store-search-criteria.component';

describe('MyStoreSearchCriteriaComponent', () => {
  let component: MyStoreSearchCriteriaComponent;
  let fixture: ComponentFixture<MyStoreSearchCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStoreSearchCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStoreSearchCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
