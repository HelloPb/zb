import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardProductNavsComponent } from './standard-product-navs.component';

describe('StandardProductNavsComponent', () => {
  let component: StandardProductNavsComponent;
  let fixture: ComponentFixture<StandardProductNavsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardProductNavsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardProductNavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
