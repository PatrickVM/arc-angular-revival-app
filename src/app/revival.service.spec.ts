import { TestBed } from '@angular/core/testing';

import { RevivalService } from './revival.service';

describe('RevivalService', () => {
  let service: RevivalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RevivalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
