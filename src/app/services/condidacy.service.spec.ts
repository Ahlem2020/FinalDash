import { TestBed } from '@angular/core/testing';

import { CondidacyService } from './condidacy.service';

describe('CondidacyService', () => {
  let service: CondidacyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CondidacyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
