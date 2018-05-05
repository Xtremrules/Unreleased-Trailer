import { TestBed, inject } from '@angular/core/testing';

import { UnreleasedService } from './unreleased.service';

describe('UnreleasedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnreleasedService]
    });
  });

  it('should be created', inject([UnreleasedService], (service: UnreleasedService) => {
    expect(service).toBeTruthy();
  }));
});
