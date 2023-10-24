import { TestBed } from '@angular/core/testing';

import { VolGuard } from './vol.guard';

describe('VolGuard', () => {
  let guard: VolGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VolGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
