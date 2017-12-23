import { TestBed, inject } from '@angular/core/testing';

import { StandardProductResolverService } from './standard-product-resolver.service';

describe('StandardProductResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StandardProductResolverService]
    });
  });

  it('should be created', inject([StandardProductResolverService], (service: StandardProductResolverService) => {
    expect(service).toBeTruthy();
  }));
});
