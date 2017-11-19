import { TestBed, inject } from '@angular/core/testing';

import { UserCultureService } from './user-culture.service';

describe('UserCultureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserCultureService]
    });
  });

  it('should be created', inject([UserCultureService], (service: UserCultureService) => {
    expect(service).toBeTruthy();
  }));
});
