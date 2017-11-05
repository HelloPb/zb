import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStoreSearchResultComponent } from './my-store-search-result.component';

describe('MyStoreSearchResultComponent', () => {
  let component: MyStoreSearchResultComponent;
  let fixture: ComponentFixture<MyStoreSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStoreSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStoreSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
