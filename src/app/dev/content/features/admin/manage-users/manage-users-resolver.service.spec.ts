import { TestBed, inject } from '@angular/core/testing';

import { ManageUsersResolverService } from './manage-users-resolver.service';

describe('ManageUsersResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageUsersResolverService]
    });
  });

  it('should be created', inject([ManageUsersResolverService], (service: ManageUsersResolverService) => {
    expect(service).toBeTruthy();
  }));
});
