import { ProfileUsersService } from './users.service';
import { TestBed, inject } from '@angular/core/testing';


describe('ProfileUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileUsersService]
    });
  });

  it('should be created', inject([ProfileUsersService], (service: ProfileUsersService) => {
    expect(service).toBeTruthy();
  }));
});
