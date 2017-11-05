import { ProfileUsersResolverService } from './users-resolver.service';
import { TestBed, inject } from '@angular/core/testing';


describe('ProfileUsersResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileUsersResolverService]
    });
  });

  it('should be created', inject([ProfileUsersResolverService], (service: ProfileUsersResolverService) => {
    expect(service).toBeTruthy();
  }));
});
