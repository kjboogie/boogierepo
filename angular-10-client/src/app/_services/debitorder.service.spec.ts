import { TestBed } from '@angular/core/testing';

import { DebitorderService } from './debitorder.service';

describe('DebitorderService', () => {
  let service: DebitorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DebitorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
