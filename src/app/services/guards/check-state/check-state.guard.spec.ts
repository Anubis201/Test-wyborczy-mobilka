import { TestBed } from '@angular/core/testing';

import { CheckStateGuard } from './check-state.guard';

describe('CheckStateGuard', () => {
  let guard: CheckStateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckStateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
