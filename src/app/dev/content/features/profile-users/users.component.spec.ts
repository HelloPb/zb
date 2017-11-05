import { ProfileUsersComponent } from './users.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('ProfileUsersComponent', () => {
  let component: ProfileUsersComponent;
  let fixture: ComponentFixture<ProfileUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
