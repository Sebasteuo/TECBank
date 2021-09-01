import { TestBed } from '@angular/core/testing';

import { WithDrawalsService } from './with-drawals.service';

describe('WithDrawalsService', () => {
  let service: WithDrawalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WithDrawalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
