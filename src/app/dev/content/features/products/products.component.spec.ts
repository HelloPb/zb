import { ProfileProductsComponent } from './products.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('ProfileProductsComponent', () => {
  let component: ProfileProductsComponent;
  let fixture: ComponentFixture<ProfileProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
