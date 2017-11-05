import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardProductDetailComponent } from './standard-product-detail.component';

describe('StandardProductDetailComponent', () => {
  let component: StandardProductDetailComponent;
  let fixture: ComponentFixture<StandardProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardProductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
