import { TestBed, inject } from '@angular/core/testing';

import { YesNoDialogService } from './yes-no-dialog.service';

describe('YesNoDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YesNoDialogService]
    });
  });

  it('should be created', inject([YesNoDialogService], (service: YesNoDialogService) => {
    expect(service).toBeTruthy();
  }));
});
