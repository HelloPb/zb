import { TestBed, inject } from '@angular/core/testing';

import { StandardProductService } from './standard-product.service';

describe('StandardProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StandardProductService]
    });
  });

  it('should be created', inject([StandardProductService], (service: StandardProductService) => {
    expect(service).toBeTruthy();
  }));
});
