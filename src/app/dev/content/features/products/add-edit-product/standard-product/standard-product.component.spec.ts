import { StandardProductComponent } from './standard-product.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('StandardProductComponent', () => {
  let component: StandardProductComponent;
  let fixture: ComponentFixture<StandardProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
