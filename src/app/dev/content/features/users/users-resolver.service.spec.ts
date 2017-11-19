import { UsersResolverService } from './users-resolver.service';
import { TestBed, inject } from '@angular/core/testing';


describe('UsersResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersResolverService]
    });
  });

  it('should be created', inject([UsersResolverService], (service: UsersResolverService) => {
    expect(service).toBeTruthy();
  }));
});
