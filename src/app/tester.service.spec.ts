import { TestBed } from '@angular/core/testing';

import { TesterService } from './tester.service';

describe('TesterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TesterService = TestBed.get(TesterService);
    expect(service).toBeTruthy();
  });
});
