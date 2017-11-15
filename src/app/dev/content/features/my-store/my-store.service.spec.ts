import { TestBed, inject } from '@angular/core/testing';

import { MyStoreService } from './my-store.service';

describe('MyStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyStoreService]
    });
  });

  it('should be created', inject([MyStoreService], (service: MyStoreService) => {
    expect(service).toBeTruthy();
  }));
});
