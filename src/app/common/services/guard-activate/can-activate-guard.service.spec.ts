import { CanActivateGuardService } from './can-activate-guard.service';
import { TestBed, inject } from '@angular/core/testing';


describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateGuardService]
    });
  });

  it('should be created', inject([CanActivateGuardService], (service: CanActivateGuardService) => {
    expect(service).toBeTruthy();
  }));
});
