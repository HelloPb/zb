import { TestBed, inject } from '@angular/core/testing';

import { CountryCultureService } from './country-culture.service';

describe('CountryCultureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryCultureService]
    });
  });

  it('should be created', inject([CountryCultureService], (service: CountryCultureService) => {
    expect(service).toBeTruthy();
  }));
});
